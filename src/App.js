import React from 'react'
import Game from './pages/Game'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (

    <Router>
      <div>
        <Link></Link>
        <Switch>
          <Route exact path="/">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App