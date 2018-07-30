import { combineReducers } from 'redux'

import reducerTemplate from './reducerTemplate'

const rootReducer = combineReducers({ 
  stateTemplate : reducerTemplate,
})

export default rootReducer
