import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/players' component={Roster}/>
      <Route path='/clubs' component={Schedule}/>
    </Switch>
  </main>
)

export default Main