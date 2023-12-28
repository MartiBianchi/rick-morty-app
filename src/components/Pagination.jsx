import PropTypes from 'prop-types'

export default function Pagination({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  pageInfo,
}) {
  return (
    <nav className="mt-3">
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handlePreviousPage()}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handlePreviousPage()}
            disabled={currentPage === 1}
          >
            {currentPage <= 1 ? '-' : currentPage - 1}
          </button>
        </li>
        <li className="page-item active">
          <button className="page-link">{currentPage}</button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handleNextPage()}
            disabled={currentPage === pageInfo.pages}
          >
            {currentPage >= pageInfo.next ? '-' : currentPage + 1}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handleNextPage()}
            disabled={currentPage === pageInfo.pages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  handlePreviousPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageInfo: PropTypes.object.isRequired,
}
