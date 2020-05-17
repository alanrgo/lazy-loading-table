import React from "react";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import InfiniteTable from "./InfiniteTable";
import {RandomPeopleApiResponseExample} from "../../hooks/fixtures/RandomPeopleApi";

jest.mock('axios')

describe('InfiniteTable Component', () => {
  it('should call random people api when intantiated', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve())

    render(<InfiniteTable/>)

    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/', {
      responseType: 'json'
    })
  })
  
  it('should display list of people in a table', () => {
    axios.get.mockImplementation(() => Promise.resolve(RandomPeopleApiResponseExample))
    const personFirstNameAsBrad = RandomPeopleApiResponseExample.results[0].name.first
    
    render(<InfiniteTable/>)
    
    expect(screen.getByText(personFirstNameAsBrad)).toBeInTheDocument()
  })
})