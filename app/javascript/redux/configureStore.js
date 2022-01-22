import { createStore, applyMiddleware } from "redux"

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  things: [
    {
      name: 'test',
      guid: '123'
    },
    {
      name: 'test1',
      guid: '124'
    }
  ]
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { things: action.json.things }
    default:
      return state
  }
}

const configureStore = () => {
  return createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  ); 
}

export default configureStore;