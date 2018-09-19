import { Platform, TouchableNativeFeedback } from 'react-native'

const props = {
  useForeground: TouchableNativeFeedback.canUseNativeForeground()
}

if (Platform.OS == 'android') {
  if (Platform.Version >= 21) {
    props.background = TouchableNativeFeedback.Ripple('rgba(255,255,255,0.2)', true)
  } else {
    props.background = TouchableNativeFeedback.SelectableBackground()
  }
}

export default props
