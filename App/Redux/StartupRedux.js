import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  appRequest: null,
  appSuccess: null,
  appFailure: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  app: null,
  fetching: false,
  error: null
})

export const request = (state, { username }) =>
  state.merge({ fetching: true, app: null })

export const success = (state, action) =>
  state.merge({ fetching: true, app: true, error: null })

export const failure = (state) =>
  state.merge({ fetching: false, error: true, app: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.APP_REQUEST]: request,
  [Types.APP_SUCCESS]: success,
  [Types.APP_FAILURE]: failure
})