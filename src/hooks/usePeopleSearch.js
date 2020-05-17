import React, {useEffect, useState} from 'react';
import axios from 'axios'
import People from "../models/people";

const usePeopleSearch = () => {
  const [people, setPeople] = useState([])
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/', {
      responseType: 'json'
    }).then(response => {
      setPeople(People({ apiData: response.data.results } ))
    })
  }, [])
  
  return people
}

export default usePeopleSearch