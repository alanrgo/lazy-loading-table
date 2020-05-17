import PropTypes from 'prop-types';

const People = ({apiData}) => {
  return apiData.map(data => data.name.first)
}

People.propTypes = {
  apiData: PropTypes.object
}

export default People