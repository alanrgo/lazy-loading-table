import {RandomPeopleApiResponseExample} from "../hooks/fixtures/RandomPeopleApi";
import People from "./people";

describe('People Model', () => {
  
  it('should return array of person object from Random Use Api response', () => {
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
    const expectedList = [
      Brad, Adem
    ]

    const responseExample = RandomPeopleApiResponseExample

    const people = People({apiData: responseExample.results})
    expect(people).toEqual(expectedList)
  })
})