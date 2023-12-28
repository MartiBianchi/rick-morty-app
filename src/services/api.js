const API_URL = 'https://rickandmortyapi.com/api'

// Función de utilidad para manejar las solicitudes
const handleRequest = async (url, options) => {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Función para realizar una solicitud GET
export const get = async (endpoint) => {
  const url = `${API_URL}${endpoint}`
  return handleRequest(url, { method: 'GET' })
}
