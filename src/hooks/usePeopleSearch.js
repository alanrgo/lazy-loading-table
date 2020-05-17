import React, {useEffect} from 'react';
import axios from 'axios'

const usePeopleSearch = () => {
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/', {
      responseType: 'json'
    })
  }, [])
  
  return ['brad', 'adem']
}

export default usePeopleSearch