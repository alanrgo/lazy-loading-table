import React from "react";
import axios from "axios";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import InfiniteTable from "./InfiniteTable";
import {RandomPeopleApiResponseExample} from "../../hooks/fixtures/RandomPeopleApi";

jest.mock('axios')
axios.CancelToken = jest.fn()

describe('InfiniteTable Component', () => {
  console.error = jest.fn()
  
  it('should call random people api when instantiated', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({data: RandomPeopleApiResponseExample} ))

    render(<InfiniteTable/>)

    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/', {
      params: {
        results: 25
      },
      responseType: 'json',
      cancelToken: new axios.CancelToken(()=>{})
    })
  })
  
  it('should display list of people in a table', async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: RandomPeopleApiResponseExample} ))
    const personFirstNameAsBrad = RandomPeopleApiResponseExample.results[0].name.first
    
    render(<InfiniteTable/>)
    
    await waitFor(() => expect(screen.getByText(personFirstNameAsBrad)).toBeInTheDocument())
  })
  
  it('should not render Loading... when scrolling a little the page', async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: RandomPeopleApiResponseExample} ))
    const loadingMessage = 'Loading...'

    render(<InfiniteTable/>)
    
    fireEvent.scroll(window, {target: {scrollY: 100}})

    await waitFor(() => expect(screen.queryByText(loadingMessage)).not.toBeInTheDocument())
  })

  it('should render Loading... only when scrolling to the bottom of the page', async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: RandomPeopleApiResponseExample} ))
    const loadingMessage = 'Loading...'

    render(<InfiniteTable/>)
    global = {
      document: {
        body: {
          offsetHeight: 768
        }
      }
    }

    fireEvent.scroll(window, {target: {scrollY: 758}})

    await waitFor(() => expect(screen.getByText(loadingMessage)).toBeInTheDocument())
  })

})