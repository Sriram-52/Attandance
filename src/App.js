import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import TitlePage from './Pages/TitlePage'
import AttendenceTablePage from './Pages/AttendenceTablePage'

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={TitlePage} exact />
        <Route path='/table/:title' component={AttendenceTablePage} />
      </Switch>
    </main>
  )
}

export default App
