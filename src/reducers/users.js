import * as constants from '../constants/constants'

const defaultUsersState = {
  users: [],
  isPending: false,
  error: '',
}

export const usersReducer = (state = defaultUsersState, action = {}) => {
  switch (action.type) {
    case constants.REQUEST_USERS_PENDING:
      return {
        ...state,
        isPending: true,
      }
    case constants.REQUEST_USERS_SUCCESS:
      return {
        users: [...action.payload],
        isPending: false,
      }
    case constants.REQUEST_USERS_FAIL:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      }
    default:
      return state
  }
}
