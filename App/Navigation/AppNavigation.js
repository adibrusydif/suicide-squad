import { StackNavigator } from 'react-navigation'
import Introduction from '../Containers/Introduction'
import ChangePassword from '../Containers/FirstLogin/changePassword'
import TakePhoto from '../Containers/FirstLogin/takePhoto'
import MainTab from '../Containers/MainTab'
import Login from '../Containers/Login'
import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  // SplashScreen: { screen: SplashScreen },
  IntroductionScreen: { screen: Introduction },
  LoginScreen: { screen: Login },
  ChangePasswordScreen: { screen: ChangePassword },
  TakePhotoScreen: { screen: TakePhoto },
  MainTabScreen: { screen: MainTab },
}, {
  initialRouteName: 'IntroductionScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.tintColor,
    headerBackTitleStyle: "#ffffff",
    headerTintColor: "#ffffff"
  }
})

export default PrimaryNav
