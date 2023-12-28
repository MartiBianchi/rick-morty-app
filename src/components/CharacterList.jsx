import PropTypes from 'prop-types'

import Spinner from '../components/Spinner'

export default function CharacterList({ characters, loading }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {characters.map((character) => (
            <div className="col" key={character.id}>
              <div className="card">
                <img
                  src={character.image}
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item">
                      Status: {character.status}
                    </li>
                    <li className="list-group-item">
                      Species: {character.species}
                    </li>
                    <li className="list-group-item">
                      Gender: {character.gender}
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary mt-3 w-100">
                    View more details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
