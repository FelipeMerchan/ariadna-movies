import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/MovieItem.scss'

export const MovieItem = ({ title, cover }) => {
  return (
    <article className="MovieItem">
      <img className="MovieItem__image" src={cover} width="350" alt={title} />
      <div className="MovieItem__details">
        <h3 className="MovieItem__title text-uppercase text-center">{title}</h3>
        <div>
          <Link className="MovieItem__button text-uppercase" to="/">Watch now</Link>
          <Link className="MovieItem__button MovieItem__button--ghost text-uppercase" to="/">More info</Link>
        </div>
      </div>
    </article>
  )
}