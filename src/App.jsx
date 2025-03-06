import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import BotActions from './pages/botAction/BotActions'
import Trends from './pages/trends/Trends'
import Engagements from './pages/engagements/Engagements'
import Reports from './pages/reports/Reports'
import Signup from './pages/signup/Signup'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/' element={ <Signup /> }/>
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/bot-actions' element={ <BotActions /> } />
          <Route path='/trends' element={ <Trends /> } />
          <Route path='engagements' element={ <Engagements /> } />
          <Route path='reports' element={ <Reports /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App