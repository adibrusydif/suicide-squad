import { put } from 'redux-saga/effects'
import StartupActions from '../Redux/StartupRedux'
import { navigate } from '../Services/Navigator'

// process STARTUP actions
export function * initApp (action) {
  yield put(StartupActions.appSuccess())
  yield put(navigate('IntroductionScreen'))
}
