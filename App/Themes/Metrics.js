import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin

  export const MARGIN_HORIZONTAL = 10
  export const MARGIN_VERTICAL = 10
  export const SECTION = 25
  export const BASE_MARGIN = 10
  export const DOUBLE_BASE_MARGIN = 20
  export const SMALL_MARGIN = 5
  export const DOUBLE_SECTION = 50
  export const SCREEN_WIDTH = width < height ? width : height
  export const SCREEN_HEIGHT = width < height ? height : width
  export const HALF_SCREEN_HEIGHT = height / 2
  export const buttonRadius = 4

  export const ICON = {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  }

  export const IMAGE = {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
