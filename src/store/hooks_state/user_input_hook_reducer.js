import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  user_text_change: '',
  user_text_submit: '',
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUTCHANGE:
        return {
          ...state,
          user_text_change: action.payload
        }
      case ACTION_TYPES.USER_INPUTSUBMIT:
        return {
          ...state,
          user_text_submit: action.payload
        }
      default:
        return state
    }
}

 