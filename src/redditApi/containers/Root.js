import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AsyncApp from './AsyncApp'
import { createStore, applyMiddleware, compose } from 'redux'
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
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, loggerMiddleware),
  // other store enhancers if any
);
const store = createStore(
  rootReducer,
  preloadedState,
  enhancer
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
