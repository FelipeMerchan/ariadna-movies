import { useState, useEffect } from 'react'

export const useInitialState = (API) => {
  const [ movies, setMovies ] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(API)
        const data = await response.json()
        setMovies(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  return movies
}