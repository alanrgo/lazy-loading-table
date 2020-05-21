import React from "react";
import PropTypes from 'prop-types';
import './PeopleTableList.css'

const PeopleTableList = ({people}) => {
  
  return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        {people.map(person => {
          return (
              <tr key={`${person.name}-tr`}>
                <td key={person.name}>{ person.name }</td>
                <td key={person.email}>{ person.email }</td>
                <td key={person.city}>{ person.city }</td>
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