import React from "react";
import { render, screen } from '@testing-library/react';
import PeopleTableList from "./PeopleTableList";

describe("PeopleTableList Component", () => {
  
  it('should render information from array', () => {
    const simpleNameArray = ["brad", "adem"]
    const firstName = simpleNameArray[0]
    const secondName = simpleNameArray[1]
    
    render(<PeopleTableList people={simpleNameArray}/>)
    
    expect(screen.getByText(firstName)).toBeInTheDocument()
    expect(screen.getByText(secondName)).toBeInTheDocument()
  })
})