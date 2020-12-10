import React, { useState, useEffect } from 'react'

import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { SliderItem } from '../components/SliderItem'
import { ModuleTab } from '../components/ModuleTab'
import { Movies } from '../components/Movies'
import { MovieItem } from '../components/MovieItem'
import { useInitialState } from '../hooks/useInitialState'
import '../assets/styles/pages/Home.scss'

const API = 'http://localhost:3000/initialState'

export const Home = () => {

  const initialState = useInitialState(API)
  const [ category, setCategory ] = useState('All')

  const renderMovieList = (list) => {
    return list.map(movie =>
      <MovieItem key={movie.id} {...movie} />
    )
  }

  // Remove the active class from tabs that are inactive
  const removeClass = (htmlCollection) => {
    for(let i = 0; i < htmlCollection.length; i++) {
      htmlCollection[i].classList.remove('is-active')
    }
  }

  // Add the is-active class to the active tab
  const addClass = (element) => {
    const tabActivated = document.getElementById(element).parentNode
    tabActivated.classList.add('is-active')
  }

  //Render the movies of the selected tab
  const renderMovies = () => {
    switch (category) {
      case 'All':
        return renderMovieList(initialState)
      case 'New Releases':
        const newReleasesList = initialState.filter(movie => movie.category === 'New Releases')
        return renderMovieList(newReleasesList)
      case 'Most Popular':
        const mostPopularList = initialState.filter(movie => movie.category === 'Most Popular')
        return renderMovieList(mostPopularList)
      case 'Trends':
        const trendsList = initialState.filter(movie => movie.category === 'Trends')
        return renderMovieList(trendsList)
      case 'My Favorites':
        const myFavoritesList = initialState.filter(movie => movie.category === 'My Favorites')
        return renderMovieList(myFavoritesList)
      case 'Recommendations':
        const recommendationsList = initialState.filter(movie => movie.category === 'Recommendations')
        return renderMovieList(recommendationsList)
    }
  }

  const handleClick = e => {
    const { target } = e

    if(target.dataset.button === 'All') {
      const tabs = document.getElementsByClassName('ModuleTab__itemContainer')
      removeClass(tabs)
      addClass('tab-1')
      setCategory('All')
    } else if (target.dataset.button === 'New Releases') {
      const tabs = document.getElementsByClassName('ModuleTab__itemContainer')
      removeClass(tabs)
      addClass('tab-2')
      setCategory('New Releases')
    } else if (target.dataset.button === 'Most Popular') {
      const tabs = document.getElementsByClassName('ModuleTab__itemContainer')
      removeClass(tabs)
      addClass('tab-3')
      setCategory('Most Popular')
    } else if (target.dataset.button === 'Trends') {
      const tabs = document.getElementsByClassName('ModuleTab__itemContainer')
      removeClass(tabs)
      addClass('tab-4')
      setCategory('Trends')
    } else if (target.dataset.button === 'My Favorites') {
      const tabs = document.getElementsByClassName('ModuleTab__itemContainer')
      removeClass(tabs)
      addClass('tab-5')
      setCategory('My Favorites')
    } else if (target.dataset.button === 'Recommendations') {
      const tabs = document.getElementsByClassName('ModuleTab__itemContainer')
      removeClass(tabs)
      addClass('tab-6')
      setCategory('Recommendations')
    }
  }

  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <div className="sliderContainer">
        <div className="slider-indicatorContainer">
          <a className="slider-indicator" href="#slide-1"></a>
          <a className="slider-indicator" href="#slide-2"></a>
          <a className="slider-indicator" href="#slide-3"></a>
        </div>
        <Slider>
          <SliderItem
            styles="SliderItem aquaman"
            id="slide-1"
            title="Aquaman"
            description="Arthur Curry learns that he is the heir of the underwater kingdom of Atlantis. This will become Aquaman, the emperor of Atlantis, committed to defending the entire planet, both on land and in the seas."
          />
          <SliderItem
            styles="SliderItem bumblebee"
            id="slide-2"
            title="Bumblebee"
            description="In 1987, Charlie, a teenager, finds Bumblebee, very injured, in the junkyard he had reached while fleeing. While he restores it, Charlie perceives that what he has found is not a regular yellow Volkswagen."
          />
          <SliderItem
            styles="SliderItem venom"
            id="slide-3"
            title="Venom"
            description="Journalist Eddie Brock is investigating Carlton Drake, the famous founder of the Life Foundation.
            Brock establishes a symbiosis with an alien that offers him superpowers, but takes over his personality and returns to perverse."
          />
        </Slider>
      </div>
      <main className="main wrapper">
        <ModuleTab onClick={handleClick} />
        <Movies>
          {renderMovies()}
        </Movies>
      </main>
    </>
  )
}