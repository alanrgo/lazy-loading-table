import React, {useEffect} from "react";
import usePeopleSearch from "../../hooks/usePeopleSearch";
import PeopleTableList from "./PeopleTableList/PeopleTableList";

const InfiniteTable = () => {
  useEffect(() => {
    
  }, []);
  
  const people = usePeopleSearch()
  return (
      <PeopleTableList people={people}/>
  )
}

export default InfiniteTable