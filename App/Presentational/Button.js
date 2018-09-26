import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity, Text, View } from 'react-native'
import { BUTTON_PRIMARY } from '../Themes/ApplicationStyles'
import { NativeFeedbackProps } from '.'
import { WHITE, LIGHT_GREY, ORANGE, BLACK } from '../Themes/Colors';
import Fonts from '../Themes/Fonts'
import { DOUBLE_BASE_MARGIN } from '../Themes/Metrics';

let ButtonByPlatform = Platform.OS == "android" ? TouchableNativeFeedback : TouchableOpacity

class Button extends Component {

  static propTypes = {
    default: PropTypes.any,
    reverse: PropTypes.any,
    onPress: PropTypes.func,
    containerStyle: PropTypes.object,
    isFetching: PropTypes.bool
  }

  buttonStyle = () => {
    const { reverse, isFetching } = this.props

    if (isFetching) return styles.buttonDisabled

    if (reverse) {
      return styles.buttonReverse
    } else {
      return styles.button
    }
  }

  buttonTextStyle = () => {
    const { reverse } = this.props

    if (reverse) {
      return styles.buttonTextReverse
    } else {
      return styles.buttonText
    }
  }

  render() {
    const { children, containerStyle, onPress } = this.props
    return (
      <ButtonByPlatform onPress={onPress} {...NativeFeedbackProps}>
        <View style={[this.buttonStyle(), containerStyle]}>
          <Text style={this.buttonTextStyle()}>{children}</Text>
        </View>
      </ButtonByPlatform>
    )
  }
}

const styles = {
  button: {
    marginVertical: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    justifyContent: 'center',
    ...BUTTON_PRIMARY,
    height: 50
  },
  buttonReverse: {
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: BLACK,
    alignSelf: "stretch",
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    margin: 15,
    textAlign: 'center',
    color: WHITE,
    ...Fonts.style.button
  },
  buttonTextReverse: {
    margin: 15,
    textAlign: 'center',
    color: BLACK,
    ...Fonts.style.largeBold
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

export default Button
