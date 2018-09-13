import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles , Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.halfScreenHeight - Metrics.images.logo,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  centered: {
    alignItems: 'center'
  },
  // sectionText: {
  //   color: Colors.coal
  // }
})
