import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'
import Error from './Error'
import Card from './Card'

const App = () => {
  
  return (
    <div>
      <Router>
        <Link to="/form-link">FormLink</Link><br />
        <Link to="/form-ref-link">FormRefLink</Link><br />
        <Link to="/form-state-link">FormStateLink</Link><br />
        <Switch>
          <Route path="/form-link" component={Form}/>
          <Route path="/form-ref-link" component={FormRef}/>
          <Route path="/form-state-link" component={FormState}/>
          <Route path="/card" component={Card}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App