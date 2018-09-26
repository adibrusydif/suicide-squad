import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { CONTAINER_V2 } from '../../Themes/ApplicationStyles'
import { TextInput, Button, Text, PasswordEye } from '../../Presentational'
import Images from '../../Themes/Images'
import { validateEmail } from '../../Services/Validation'
import { ORANGE } from '../../Themes/Colors'
import { SECTION, DOUBLE_BASE_MARGIN } from '../../Themes/Metrics'

export default class Login extends Component {
  static navigationOptions = {
    title: "Login Agent"
  }

  constructor(props) {
    super(props)

    this.state = {
      email: "asd@asd.com",
      password: "asdasdasd",
      secureTextEntry: true,
      error: {}
    }

    this.form = ['email', 'password']
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
      else {
        if(name === "email" && !validateEmail(value)) {
          errors[name] = 'Email tidak valid'
        }
        else {
          errors = null
        }
      }
    })

    if(errors) {
      this.setState({ errors })
    }
    else {
      const { navigate } = this.props.navigation
      navigate('ChangePasswordScreen')
    }
  }

  render() {
    const { errors = {}, email, password, secureTextEntry } = this.state
    return (
      <View style={CONTAINER_V2}>
        <View style={styles.section}>
          <TextInput
            ref={ref => (this.email = ref)}
            keyboardType='email-address'
            label="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            error={errors.email}
            value={email}
          />

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

          <Button containerStyle={styles.btnLogin} onPress={this.onSubmit}>LOGIN</Button>
          <Text style={styles.forgotText}>Lupa password?</Text>
        </View>
        <Image source={Images.illustrationAgent} style={styles.illustratorBottom}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    marginTop: DOUBLE_BASE_MARGIN,
    paddingHorizontal: SECTION
  },
  btnLogin: {
    marginTop: 30
  },
  forgotText: {
    marginTop: 20,
    textAlign: "center",
    color: ORANGE
  },
  illustratorBottom: {
    position: "absolute",
    bottom: 0,
    height: 154
  }
})