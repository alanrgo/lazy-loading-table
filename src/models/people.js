import PropTypes from 'prop-types';

const People = ({apiData}) => {
  return apiData.map(data => {
    return {
      name: data.name.first,
      email: data.email,
      city: data.location.city
    }
  })
}

People.propTypes = {
  apiData: PropTypes.object
}

export default People