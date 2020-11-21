import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/SliderItem.scss'

export const SliderItem = ({ id, styles, title, description }) => {
  return (
    <div className={styles} id={id}>
      <div className="wrapper">
        <div>
          <h2 className="SliderItem__title text-uppercase">{title}</h2>
          <p className="SliderItem__description">{description}</p>
          <Link className="SliderItem__button text-uppercase" to="/">Watch now</Link>
          <Link className="SliderItem__button SliderItem__button--ghost text-uppercase" to="/">More info</Link>
        </div>
      </div>
    </div>
  )
}