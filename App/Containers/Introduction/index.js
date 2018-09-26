import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../../Themes'
import { Button } from '../../Presentational'
import ImageSlider from '../../Presentational/Carousel/ImageSlider'
import { CONTAINER_V2 } from '../../Themes/ApplicationStyles'

const data = [
  {
    title: "Jadi Bos untuk Diri Anda Sendiri",
    subtitle: "Anda sendiri yang mengatur apa yang mau Anda kerjakan dan upah yang didapatkan",
    image: Images.introSlider1,
  },
  {
    title: "Raih Penghasilan Tak Terbatas",
    subtitle: "Semakin banyak proyek yang Anda selesaikan, semakin banyak komisi Anda",
    image: Images.introSlider2,
  },
  {
    title: "Bebas Bekerja dengan Fleksibel",
    subtitle: "Anda bisa bebas memilih proyek apapun, kapanpun, dan dimanapun",
    image: Images.introSlider3,
  }
]

export class IntroductionScreen extends Component {

  static navigationOptions = {
    header: null
  }
  
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={CONTAINER_V2}>
        <Image source={Images.logoLong} style={styles.logoLong}/>
        <ImageSlider data={data}/>
        <Button containerStyle={styles.btnLogin} onPress={() => navigate('LoginScreen')}>LOGIN</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnLogin: {
    top: 10,
    marginHorizontal: 25
  },
  logoLong: {
    alignSelf: "center",
    marginTop: "20%"
  }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionScreen)
