import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { get } from '../services/api'

import Navbar from '../components/Navbar'

export default function Character() {
  const { id } = useParams()

  const [character, setCharacter] = useState({})

  const { episode, image, name, species, status, type } = character

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/character/${id}`
        const data = await get(url)

        setCharacter(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])
  return (
    <>
      <Navbar />

      <div className="card mb-3 container mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{name}</h1>
              <p className="card-text mt-3">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text mt-4">
                <small>
                  <span className="badge rounded-pill fs-6 bg-primary">
                    {species}: {type}
                  </span>
                </small>
                <small className="mx-3">
                  <span
                    className={`badge rounded-pill fs-6 ${
                      status === 'Alive'
                        ? 'text-bg-success'
                        : status === 'Dead'
                        ? 'text-bg-danger'
                        : 'text-bg-warning'
                    }`}
                  >
                    {status}
                  </span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
