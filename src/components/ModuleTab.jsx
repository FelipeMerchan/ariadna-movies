import React from 'react'

import '../assets/styles/components/ModuleTab.scss'

export const ModuleTab = ({ onClick }) => {

  const handleClick = e => {
    onClick(e)
    console.log(e.target)
  }

  return (
    <ul className="ModuleTab">
      <li className="ModuleTab__itemContainer is-active">
        <input type="button" className="ModuleTab__item" onClick={onClick} data-button="All" value="All" id="tab-1" />
      </li>
      <li className="ModuleTab__itemContainer">
        <button className="ModuleTab__item" onClick={onClick} data-button="New Releases" id="tab-2">New Releases</button>
      </li>
      <li className="ModuleTab__itemContainer">
        <button className="ModuleTab__item" onClick={onClick} data-button="Most Popular" id="tab-3">Most Popular</button>
      </li>
      <li className="ModuleTab__itemContainer">
        <button className="ModuleTab__item" onClick={onClick} data-button="Trends" id="tab-4">Trends</button>
      </li>
      <li className="ModuleTab__itemContainer">
        <button className="ModuleTab__item" onClick={onClick} data-button="My Favorites" id="tab-5">My Favorites</button>
      </li>
      <li className="ModuleTab__itemContainer">
        <button className="ModuleTab__item" onClick={onClick} data-button="Recommendations" id="tab-6">Recommendations</button>
      </li>
    </ul>
  )
}