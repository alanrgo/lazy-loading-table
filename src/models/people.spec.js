import {RandomPeopleApiResponseExample} from "../hooks/fixtures/RandomPeopleApi";
import People from "./people";

describe('People Model', () => {
  it('should return people array from Random User API response', () => {
    const responseExample = RandomPeopleApiResponseExample
    
    const people = People({apiData: responseExample.results})
    const expectedArray = ['brad', 'Adem']
    
    expect(people).toEqual(expectedArray)
    
  })
})