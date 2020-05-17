import React from "react";
import axios from "axios";
import { render, screen, waitFor } from '@testing-library/react';
import InfiniteTable from "./InfiniteTable";
import {RandomPeopleApiResponseExample} from "../../hooks/fixtures/RandomPeopleApi";

jest.mock('axios')

describe('InfiniteTable Component', () => {
  it('should call random people api when instantiated', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({data: RandomPeopleApiResponseExample} ))

    render(<InfiniteTable/>)

    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/', {
      responseType: 'json'
    })
  })
  
  it('should display list of people in a table', async () => {
    axios.get.mockImplementation(() => Promise.resolve({data: RandomPeopleApiResponseExample} ))
    const personFirstNameAsBrad = RandomPeopleApiResponseExample.results[0].name.first
    
    render(<InfiniteTable/>)
    
    await waitFor(() => expect(screen.getByText(personFirstNameAsBrad)).toBeInTheDocument())
  })
})