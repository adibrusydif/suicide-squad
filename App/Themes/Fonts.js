import { StyleSheet } from 'react-native'
import { Platform } from 'react-native';
import { LIGHT_GREY, WHITE } from './Colors';

const fontFamily = {
  base: 'Roboto-Regular',
  bold: 'Roboto-Bold'
}


const size = {
  small: 12,
  medium: 14,
  large: 18,
  button: 16,
  nav: 20
}

const color = {
  default: WHITE,
  description: LIGHT_GREY
}

const style = {
  large: {
    fontFamily: fontFamily.base,
    fontSize: size.large
  },
  medium: {
    fontFamily: fontFamily.base,
    fontSize: size.medium
  },
  small: {
    fontFamily: fontFamily.base,
    fontSize: size.small
  },
  largeBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.large,
  },
  mediumBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.medium,
  },
  smallBold: {
    fontFamily: fontFamily.bold,
    fontSize: size.small,
  },
  button: {
    fontFamily: fontFamily.bold,
    fontSize: size.button,
  }
}

export default {
  size,
  style,
  color
}
