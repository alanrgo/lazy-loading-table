import React from "react";
import PropTypes from 'prop-types';

const PeopleTableList = ({people}) => {
  
  return (
      <table>
        <tbody>
        {people.map(person => {
          return (
              <tr key={`${person}-tr`}>
                <td key={person}>{ person }</td>
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