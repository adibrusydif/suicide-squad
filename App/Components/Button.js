import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableNativeFeedback, Text, View } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes'
import { NativeFeedbackProps } from '.';


class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render() {

    const props = {
      useForeground: TouchableNativeFeedback.canUseNativeForeground()
    }
  
    return (
      <TouchableNativeFeedback onPress={this.props.onPress} { ...NativeFeedbackProps }>
        <View style={[styles.button, this.props.styles]}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = {
  button: {
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: Colors.ember
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
}

export default Button
