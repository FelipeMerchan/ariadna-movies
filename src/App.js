import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import './assets/styles/App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  )
}