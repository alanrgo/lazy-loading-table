import React, {useEffect, useState} from "react";
import PeopleTableList from "./PeopleTableList/PeopleTableList";
import axios from "axios";
import People from "../../models/people";

const InfiniteTable = () => {
  const [loading, setLoading] = useState(false)
  const [usersPerRequest, setUsersPerRequest] = useState(25)
  const [people, setPeople] = useState([])
  const [scrollY, setScrollY] = useState(0)
    
  const offsetThreshold = 50
  
  const handleOnScroll = (e) => {
    setScrollY(-document.body.getBoundingClientRect().top)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
    setLoading(true)
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);
  
  const isCloseToTheBottomOfPage = (scrollY) => {
    const viewPortHeight = window.innerHeight
    const totalHeight = document.body.offsetHeight
    const currentViewPortBottom = scrollY + viewPortHeight
    
    return totalHeight - currentViewPortBottom < offsetThreshold
  }
  
  useEffect(() => {
    if( isCloseToTheBottomOfPage(scrollY) && !loading) {
      setLoading(true)
    }
  }, [scrollY])
  
  useEffect(() => {
    if( !loading ) return
    let cancel
    const cancelToken = new axios.CancelToken(c => cancel = c)
    axios.get('https://randomuser.me/api/', {
      params: {
        results: usersPerRequest
      },
      responseType: 'json',
      cancelToken
    }).then(response => {
      const newPeople = People({ apiData: response.data.results })
      setPeople([...people, ...newPeople] )
      setLoading(false)
    }).catch( e => {
      setLoading(false)
      if(axios.isCancel(e)) return
    })
    setUsersPerRequest(10)
    
    return () => cancel && cancel()
  }, [loading])
  
  return (
      <>
        <PeopleTableList people={people}/>
        {loading && <div> Loading... </div> }
      </>
  )
}

export default InfiniteTable