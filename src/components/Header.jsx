import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Header.scss'
import ariadnaMoviesLogo from '../assets/static/logo.png'

export const Header = () => {

  const menu = useRef(null)
  const overlay = useRef(null)

  const handleClick = e => {
    if (menu.current.classList.contains('is-active')) {
      menu.current.classList.remove('is-active')
      overlay.current.classList.remove('is-active')
    } else {
      menu.current.classList.add('is-active')
      overlay.current.classList.add('is-active')
    }
  }

  return (
    <header className="Header">
      <figure className="Header__logoContainer">
        <img className="Header__logo" src={ariadnaMoviesLogo} width="175" alt="ariadna Movies" />
      </figure>
      <button className="Header__hamburger-button" onClick={handleClick}></button>
      <nav className="Header__nav" ref={menu}>
        <ul>
          <li className="Header__close-button">
            <button className="text-uppercase" onClick={handleClick}></button>
          </li>
          <li>
            <Link className="Header__navItem Header__navItem--active text-uppercase" to="/">Home</Link>
          </li>
          <li>
            <Link className="Header__navItem text-uppercase" to="/">Categories</Link>
          </li>
          <li>
            <Link className="Header__navItem text-uppercase" to="/">My Favorites</Link>
          </li>
          <li>
            <Link className="Header__navItem text-uppercase sign-in" to="/">Sign In</Link>
          </li>
        </ul>
      </nav>
      <div className="overlay" ref={overlay}></div>
    </header>
  )
}