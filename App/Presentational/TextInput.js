import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { GRAY, BLACK, ORANGE } from '../Themes/Colors';
import Fonts from '../Themes/Fonts';
import { FONT_SIZE_LARGE } from '../Themes/ApplicationStyles';

export default class TextInput extends Component {
  render() {
    const { 
      ref,
      label,
      value,
      onChangeText,
      error,
      onFocus,
      onBlur,
      keyboardType,
      disabled,
      secureTextEntry,
      autoFocus,
      renderAccessory
    } = this.props

    return (
      <TextField
        ref={ref}
        fontSize={FONT_SIZE_LARGE}
        keyboardType={keyboardType}
        label={label}
        value={value}
        onChangeText={onChangeText}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCorrect={false}
        autoFocus={autoFocus}
        returnKeyType="next"
        disabled={disabled}
        secureTextEntry={secureTextEntry}
        renderAccessory={renderAccessory}
        baseColor={GRAY}
        tintColor={ORANGE}
        textColor={BLACK}
      />
    )
  }
}