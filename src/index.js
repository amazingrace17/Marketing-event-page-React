import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Jlogin from './views/jlogin'
import Home from './views/home'
import Register from './views/register'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Jlogin} path="/jlogin" />
        <Route exact component={Home} path="/" />
        <Route exact component={Register} path="/register" />
        <Route exact component={Login} path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
