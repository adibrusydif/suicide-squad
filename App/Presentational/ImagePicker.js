import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'DigitalAgent',
    quality: 0,
  }
}

const Picker = {
  LAUNCH_CAMERA: (callback) => {
    ImagePicker.launchCamera(options, (response) => {
        return callback(response)
    })
  }
}

export default Picker