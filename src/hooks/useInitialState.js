import { useState, useEffect } from 'react'

export const useInitialState = (API) => {
  const [ movies, setMovies ] = useState([])
  useEffect(() => {
    (async () => {
      const response = await fetch(API)
      const data = await response.json()
      setMovies(data)
    })()
  }, [])
  return movies
}