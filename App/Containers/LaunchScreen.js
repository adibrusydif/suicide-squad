import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { Button } from '../Components'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.LogoAgent} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.LogoAgent} style={styles.logo} />
          </View>

          <View style={styles.section} >
            {/* <Image source={Images.ready} /> */}
            <Text style={styles.sectionText}>
              "Karena sukses datang dari kerja keras, jaringan pertemenan, motivasi yang kuat dan sikap yang baik".
            </Text>
          </View>

          <View style={styles.section} >
            <Button text="Submit"/>
          </View>

        </ScrollView>
      </View>
    )
  }
}
