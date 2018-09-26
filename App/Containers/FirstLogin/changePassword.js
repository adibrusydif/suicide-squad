import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { CONTAINER_V2, MARGIN_VERTICAL_25, PADDING_HORIZONTAL_25, PADDING_VERTICAL_25, SECTION, PADDING_VERTICAL_10 } from '../../Themes/ApplicationStyles'
import { TextInput, Button, Text, PasswordEye} from '../../Presentational'
import { ORANGE } from '../../Themes/Colors'

export default class ChangePassword extends Component {

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
    return <PasswordEye onPress={this.onAccessoryPress} flag={flag}/>
  }

  onAccessoryPress = () => {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }))
  }

  onSubmit = () => {
    let errors = {};

    this.form.forEach((name) => {
      let value = this.state[name]

      if (!value) {
        errors[name] = 'Harus diisi'
      }
      else if(value.length < 6 || value.length > 12) {
        errors[name] = "Password harus terdiri dari 6 - 12 karakter"
      }
      else {
        errors = null
      }
    })

    if(errors) {
      this.setState({ errors })
    }
    else {
      const { navigate } = this.props.navigation
      navigate('TakePhotoScreen')
    }
  }

  render() {
    const { secureTextEntry, password, errors = {} } = this.state

    return (
      <View style={CONTAINER_V2}>
        <View style={[PADDING_HORIZONTAL_25, PADDING_VERTICAL_25]}>
          <Text secondary small style={{textAlign: "right"}}> Langkah 1 dari 2</Text>
        </View>
        <View style={[PADDING_HORIZONTAL_25, PADDING_VERTICAL_10]}>
          <Text large bold>Sebelum memulai, silahkan ganti password Anda terlebih dahulu</Text>
        </View>
        <View style={PADDING_HORIZONTAL_25}>
          <Text description>Hal ini untuk memudahkan Anda saat melakukan login ke akun selanjutnya</Text>
        </View>
        <View style={SECTION}>
          <TextInput
            secureTextEntry={secureTextEntry}
            ref={ref => (this.password = ref)}
            label="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            error={errors.password}
            value={password}
            renderAccessory={() => this.renderPasswordAccessory(secureTextEntry)}
          />
          <Button containerStyle={MARGIN_VERTICAL_25} onPress={this.onSubmit}>CHANGE PASSWORD</Button>
        </View>
      </View>
    )
  }
}