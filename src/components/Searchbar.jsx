import PropTypes from 'prop-types'

export default function Searchbar({ searchTerm, handleSearch }) {
  return (
    <div className="my-3">
      <input
        type="text"
        className="form-control"
        id="search"
        placeholder="Rick Sanchez"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  )
}

Searchbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
}
