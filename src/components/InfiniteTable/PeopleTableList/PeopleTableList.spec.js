import React from "react";
import { render, screen } from '@testing-library/react';
import PeopleTableList from "./PeopleTableList";

describe("PeopleTableList Component", () => {

  it('should render first name, email address, and city columns', () => {
    render(<PeopleTableList people={[]}/>)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('City')).toBeInTheDocument()
  })
  
  it('should render first name, email address, and city values from each person', () => {
    const Brad = {
      name: 'brad',
      email: 'brad.gibson@example.com',
      city: 'kilcoole'
    }
    const Adem = {
      name: 'Adem',
      email: 'adem.hamzaoglu@example.com',
      city: 'Tunceli'
    }
    const people = [
        Brad, Adem
    ]

    render(<PeopleTableList people={people}/>)

    expect(screen.getByText(Brad.name)).toBeInTheDocument()
    expect(screen.getByText(Brad.email)).toBeInTheDocument()
    expect(screen.getByText(Brad.city)).toBeInTheDocument()
    expect(screen.getByText(Adem.name)).toBeInTheDocument()
    expect(screen.getByText(Adem.email)).toBeInTheDocument()
    expect(screen.getByText(Adem.city)).toBeInTheDocument()
  })
})