// import { type } from '../actions'

const initialState = 'State'

function reducerTemplate(state=initialState, action) {
  switch (action.type) {
    case 'TYPE':
      return action.payload
    default:
      return state 
  }
}

export default reducerTemplate
