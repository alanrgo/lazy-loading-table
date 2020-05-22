import React, {useState} from "react";
import PropTypes from 'prop-types';
import './PeopleTableList.css'
import _ from 'lodash'
import ColumnResizer from 'react-column-resizer'

const PeopleTableList = ({people}) => {

  const [ sortName, setSortName ] = useState(undefined)
  const [ sortEmail, setSortEmail ] = useState(undefined)
  const [ sortCity, setSortCity ] = useState(undefined)
  
  const handleOnSortingClick = (column) => {
    const columnOptions = [
      {
        name: 'name',
        hook: setSortName
      },
      {
        name: 'email',
        hook: setSortEmail
      },
      {
        name: 'city',
        hook: setSortCity
      },
    ]
    
    columnOptions.forEach(option => {
      if(option.name === column ){
        option.hook('asc')
      } else {
        option.hook(undefined)
      }
    })
  }
  
  let processedPeopleData = people
  
  if( sortName ) 
    processedPeopleData = _.sortBy(processedPeopleData, 'name', [sortName])
  if( sortEmail )
    processedPeopleData = _.sortBy(processedPeopleData, 'email', [sortEmail])
  if( sortCity )
    processedPeopleData = _.sortBy(processedPeopleData, 'city', [sortCity])
  

  return (
      <table>
        <thead>
          <tr>
            <th onClick={() => handleOnSortingClick('name')}>Name</th>
            <ColumnResizer minWidth={100} className={'resizer resizer-head'}/>
            <th onClick={() => handleOnSortingClick('email')}>Email</th>
            <ColumnResizer minWidth={100} className={'resizer resizer-head'}/>
            <th onClick={() => handleOnSortingClick('city')}>City</th>
          </tr>
        </thead>
        <tbody>
        {processedPeopleData.map((person, index) => {
          return (
              <tr key={`${person.name}${index}-tr`}>
                <td key={`${person.name}${index}-name`}>{ person.name }</td>
                <td className={'resizer'}/>
                <td key={`${person.name}${index}-email`}>{ person.email }</td>
                <td className={'resizer'}/>
                <td key={`${person.name}${index}-city`}>{ person.city }</td>
              </tr>
              )}
          )}
        </tbody>
      </table>
  )
}

PeopleTableList.propTypes = {
  people: PropTypes.array
}


export default PeopleTableList