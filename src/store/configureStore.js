import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

import { usersReducer } from '../reducers/users'

// apply order: 1. thunk 2. logger
const middleWares = [thunk, logger]
const rootReducer = combineReducers({
  users: usersReducer,
})

export const configureStore = () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWares)))

  return store
}
