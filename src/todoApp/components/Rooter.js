import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
const Rooter = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Switch>
        <Route exact path="/">{'home'}</Route> 
        <Route exact path="/:filter?" component={App} />
      </Switch>
    </Router>
  </Provider>
)
Rooter.propTypes = {
  store: PropTypes.object.isRequired
}
export default Rooter