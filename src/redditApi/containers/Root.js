import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AsyncApp from './AsyncApp'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../ARS/reducers'
import createSagaMiddleware from 'redux-saga'
import { watchForPostReddit } from '../saga'




const sagaMiddleware = createSagaMiddleware()

const loggerMiddleware = createLogger()
const preloadedState = {
  posts: { isFetching: undefined, didInvalidate: undefined, items: Array(0) },
  selectedSubreddit: "reactjs",
  viewSignlQuestion: {}
}
const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
)
sagaMiddleware.run(watchForPostReddit)
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}
