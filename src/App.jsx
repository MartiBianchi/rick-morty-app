import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Character from './pages/Character'

import './index.css'

export default function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />

      <Route path="/character/:id" component={Character} />
      <Route path="*">
        <h1>404 - Not Found</h1>
      </Route>
    </Switch>
  )
}
