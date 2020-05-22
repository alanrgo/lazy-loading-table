import React from "react";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import PeopleTableList from "./PeopleTableList";
import {within} from "@testing-library/dom";

describe("PeopleTableList Component", () => {
  
  const mockPeople = () => {
    const Brad = {
      name: 'brad',
      email: 'brad.gibson@example.com',
      city: 'Kilcoole'
    }
    const Adem = {
      name: 'Adem',
      email: 'adem.hamzaoglu@example.com',
      city: 'Tunceli'
    }
    const people = [
      Brad, Adem
    ]
    return people
  }

  it('should render first name, email address, and city columns', () => {
    render(<PeopleTableList people={[]}/>)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('City')).toBeInTheDocument()
  })
  
  it('should render first name, email address, and city values from each person', () => {
    const people = mockPeople()
    const Brad = people[0]
    const Adem = people[1]

    render(<PeopleTableList people={people}/>)

    expect(screen.getByText(Brad.name)).toBeInTheDocument()
    expect(screen.getByText(Brad.email)).toBeInTheDocument()
    expect(screen.getByText(Brad.city)).toBeInTheDocument()
    expect(screen.getByText(Adem.name)).toBeInTheDocument()
    expect(screen.getByText(Adem.email)).toBeInTheDocument()
    expect(screen.getByText(Adem.city)).toBeInTheDocument()
  })


  it('should sort results alphabetically based on names', async () => {
    const people = mockPeople()
    
    render(<PeopleTableList people={people}/>)

    fireEvent.click(screen.getByText('Name'))

    const firstNameTestId = '0-name'
    const secondNameTestId = '1-name'
    
    const firstElement = within(screen.getByTestId(firstNameTestId))
    expect(firstElement.getByText('Adem')).toBeInTheDocument()

    const secondElement  = within(screen.getByTestId(secondNameTestId))
    expect(secondElement.getByText('brad')).toBeInTheDocument()
  })

  it('should sort results alphabetically based on emails', async () => {
    const people = mockPeople()

    render(<PeopleTableList people={people}/>)

    fireEvent.click(screen.getByText('Email'))

    const firstEmailTestId = '0-email'
    const secondEmailTestId = '1-email'

    const firstElement = within(screen.getByTestId(firstEmailTestId))
    expect(firstElement.getByText('adem.hamzaoglu@example.com')).toBeInTheDocument()

    const secondElement  = within(screen.getByTestId(secondEmailTestId))
    expect(secondElement.getByText('brad.gibson@example.com')).toBeInTheDocument()
  })

  it('should sort results alphabetically based on city', async () => {
    const people = mockPeople()

    render(<PeopleTableList people={people}/>)

    fireEvent.click(screen.getByText('City'))

    const firstCityTestId = '0-city'
    const secondCityTestId = '1-city'

    const firstElement = within(screen.getByTestId(firstCityTestId))
    expect(firstElement.getByText('Kilcoole')).toBeInTheDocument()

    const secondElement  = within(screen.getByTestId(secondCityTestId))
    expect(secondElement.getByText('Tunceli')).toBeInTheDocument()
  })
})