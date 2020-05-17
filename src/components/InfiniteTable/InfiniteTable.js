import React, {useEffect} from "react";
import usePeopleSearch from "../../hooks/usePeopleSearch";
import PeopleTableList from "./PeopleTableList/PeopleTableList";

const InfiniteTable = () => {
  useEffect(() => {
    
  }, []);
  
  const people = usePeopleSearch()
  if(!people) return null
  return (
      <PeopleTableList people={people}/>
  )
}

export default InfiniteTable