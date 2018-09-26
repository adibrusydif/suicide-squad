import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.appRequest()
    }
  }

  render () {
    return (
      <ReduxNavigation />
    )
  }
}

const mapStateToProps = (state) => ({
  initApp: state.startup.app
})

const mapDispatchToProps = (dispatch) => {
  return {
    appRequest: () => dispatch(StartupActions.appRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
