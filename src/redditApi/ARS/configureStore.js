import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { watchForPostReddit } from '../saga'




const sagaMiddleware = createSagaMiddleware()

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return (function(){createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  )
  sagaMiddleware.run(watchForPostReddit)
  })()
}



