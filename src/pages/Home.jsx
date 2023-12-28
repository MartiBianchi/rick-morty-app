import { useState, useEffect } from 'react'

import { get } from '../services/api'

import CharacterList from '../components/CharacterList'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Pagination from '../components/Pagination'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageInfo, setPageInfo] = useState({
    count: 0,
    pages: 0,
  })

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchTerm
          ? `/character/?page=${currentPage}&name=${searchTerm}`
          : `/character/?page=${currentPage}`
        const data = await get(url)

        setCharacters(data.results)
        setPageInfo(data.info)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [searchTerm, currentPage])

  useEffect(() => {
    const filteredResults = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSearchResults(filteredResults)
  }, [searchTerm, characters])

  return (
    <>
      <Navbar />

      <div className="container">
        <Searchbar handleSearch={handleSearch} searchTerm={searchTerm} />

        <CharacterList characters={searchResults} loading={loading} />

        <Pagination
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          pageInfo={pageInfo}
        />
      </div>
    </>
  )
}
