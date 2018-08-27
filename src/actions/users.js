import * as constants from '../constants/constants'

export const requestUsers = () => dispatch => {
  dispatch({ type: constants.REQUEST_USERS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error(`Something went wrong. The status code is ${res.status}`)
    })
    .then(users => {
      dispatch({ type: constants.REQUEST_USERS_SUCCESS, payload: users })
    })
    .catch(error => {
      dispatch({ type: constants.REQUEST_USERS_FAIL, payload: error })
    })
}
