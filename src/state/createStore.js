import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `START_PLAYING`) {
    return {
      ...state,
      url: action.url,
    };
  }
  return state
}

const initialState = { url: `https://s3.amazonaws.com/talkingdudes/td-003-001.mp3` }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
