import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { CONTAINER } from '../Themes/ApplicationStyles'
import { Images } from '../Themes'
import { IMAGE, LOGO, SCREEN_HEIGHT } from '../Themes/Metrics'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'

class SplashScreen extends Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount = () => {
    const { appRequest } = this.props
    appRequest()
  }

  render() {
    return (
    <View style={CONTAINER}>
        <View style={styles.imageContainer}>
          <Image source={Images.LogoAgent} style={styles.logo} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT
  },
  logo: {
    height: IMAGE.logo,
    width: IMAGE.logo,
    resizeMode: 'contain',
    alignItems: 'center'
  },
})

const mapStateToProps = (state) => ({
  initApp: state.startup.app
})

const mapDispatchToProps = (dispatch) => {
  return {
    appRequest: () => dispatch(StartupActions.appRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)


