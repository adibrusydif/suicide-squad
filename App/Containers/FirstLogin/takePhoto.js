import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';
import { CONTAINER_V2, MARGIN_VERTICAL_25, PADDING_HORIZONTAL_25, PADDING_VERTICAL_25, SECTION, ROW, PADDING_VERTICAL_10, MARGIN_VERTICAL_10 } from '../../Themes/ApplicationStyles';
import { Text, PasswordEye, FooterButton, NativeFeedbackProps, ImagePicker } from '../../Presentational';
import { WHITE_GREY_03, GREY, LIGHT_GREY, WHITE_GREY_01 } from '../../Themes/Colors';
import Icon from 'react-native-vector-icons/Entypo'
import { Images } from '../../Themes';

let requirement = [
  "Format file yang diperbolehkan: .jpg / .png",
  "Resolusi foto minimal 50 kB",
  "Foto harus tampak depan sehingga wajah Anda terlihat jelas",
  "Foto harus berwana, tidak hitam putih"
]
export default class TakePhoto extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      password: "",
      secureTextEntry: true,
      errors: {}
    }

    this.form = ['password']
  }

  renderPasswordAccessory = (flag) => {
    return <PasswordEye onPress={this.onAccessoryPress} flag={flag} />
  }

  onAccessoryPress = () => {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }))
  }

  renderRequirement = () => {
    return requirement.map((v) => {
      return (
        <View style={ROW}>
          <Icon name="dot-single" />
          <Text description style={{ marginTop: -3, marginBottom: 5 }}>{v}</Text>
        </View>
      )
    })
  }

  launchCamera = () => {
    ImagePicker.LAUNCH_CAMERA("back", (response) => {
      if(!response.didCancel) {
          console.tron.log('dapet')
      }
    })
  }

  onSubmit = () => {
    const { navigate } = this.props.navigation
    navigate('MainTabScreen')
  }

  render() {
    return (
      <View style={CONTAINER_V2}>
        <View style={[PADDING_HORIZONTAL_25, PADDING_VERTICAL_25]}>
          <Text secondary small style={{ textAlign: "right" }}> Langkah 2 dari 2</Text>
        </View>
        <View style={[PADDING_HORIZONTAL_25, PADDING_VERTICAL_10]}>
          <Text large bold>Password berhasil diganti!</Text>
          <Text large bold>Selanjutnya, pasang foto Anda</Text>
        </View>
        <View style={[PADDING_HORIZONTAL_25, { marginBottom: 10 }]}>
          <Text description>Adanya foto diri Anda akan membentuk kepercayaan calon responden saat interview</Text>
        </View>
        <View style={[SECTION, styles.containerRequirement]}>
          <Text description style={{ marginBottom: 20 }}>Syarat foto:</Text>
          {this.renderRequirement()}
        </View>
        <View style={[ROW, { marginTop: 20 }]}>
          <TouchableNativeFeedback onPress={this.launchCamera} { ...NativeFeedbackProps}>
            <View style={[styles.containerButton, { marginLeft: 25, marginRight: 5 }]}>
              <Image source={Images.addPhoto} style={styles.btnTakePhoto} />
              <Text description>Ambil Foto</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback { ...NativeFeedbackProps}>
            <View style={[styles.containerButton, { marginRight: 25, marginLeft: 5 }]}>
              <Image source={Images.addGallery} style={styles.btnTakePhoto} />
              <Text description>Buka Galeri</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <FooterButton onPress={this.onSubmit}>MULAI BEKERJA</FooterButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  containerRequirement: {
    backgroundColor: WHITE_GREY_03,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3
  },
  containerButton: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderColor: WHITE_GREY_01,
    borderWidth: 1,
    borderRadius: 3,
    position: 'relative'
  },
  btnTakePhoto: {
    width: 60,
    height: 60,
    marginBottom: 15
  }
})