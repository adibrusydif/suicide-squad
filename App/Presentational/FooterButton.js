import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity, Text, View } from 'react-native'
import { BUTTON_PRIMARY } from '../Themes/ApplicationStyles'
import { NativeFeedbackProps } from '.'
import { WHITE, LIGHT_GREY, ORANGE, BLACK } from '../Themes/Colors';
import Fonts from '../Themes/Fonts'
import { DOUBLE_BASE_MARGIN, SCREEN_WIDTH } from '../Themes/Metrics';

let ButtonByPlatform = Platform.OS == "android" ? TouchableNativeFeedback : TouchableOpacity

class FooterButton extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    containerStyle: PropTypes.object,
    isFetching: PropTypes.bool
  }

  buttonStyle = () => {
    const { isFetching } = this.props

    if (isFetching) return styles.buttonDisabled
    return styles.button
  }

  buttonTextStyle = () => {  
    return styles.buttonText
  }

  render() {
    const { children, containerStyle, onPress } = this.props
    return (
      <View style={styles.container}>
        <ButtonByPlatform onPress={onPress} {...NativeFeedbackProps}>
          <View style={[this.buttonStyle(), containerStyle]}>
            <Text style={this.buttonTextStyle()}>{children}</Text>
          </View>
        </ButtonByPlatform>
      </View>
      
    )
  }
}

const styles = {
  container: {
    position: "absolute",
    bottom: 0,
    width: SCREEN_WIDTH,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  button: {
    borderRadius: 5,
    alignSelf: "stretch",
    justifyContent: 'center',
    ...BUTTON_PRIMARY,
    height: 50,
    width: "100%"
  },
  buttonText: {
    margin: 15,
    textAlign: 'center',
    color: WHITE,
    ...Fonts.style.button
  },
  buttonDisabled: {
    marginVertical: DOUBLE_BASE_MARGIN,
    borderRadius: 5,
    backgroundColor: LIGHT_GREY,
    alignSelf: "stretch",
    justifyContent: 'center',
    height: 50
  }
}

export default FooterButton
