import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { 
  TEXT_PRIMARY_SMALL,
  TEXT_PRIMARY_SMALL_BOLD,
  TEXT_PRIMARY_DEFAULT,
  TEXT_PRIMARY_DEFAULT_BOLD,
  TEXT_PRIMARY_LARGE,
  TEXT_PRIMARY_LARGE_BOLD,
  TEXT_SECONDARY_SMALL,
  TEXT_SECONDARY_SMALL_BOLD,
  TEXT_SECONDARY_DEFAULT,
  TEXT_SECONDARY_DEFAULT_BOLD,
  TEXT_SECONDARY_LARGE,
  TEXT_SECONDARY_LARGE_BOLD,
  TEXT_DESCRIPTION_SMALL,
  TEXT_DESCRIPTION_SMALL_BOLD,
  TEXT_DESCRIPTION_DEFAULT,
  TEXT_DESCRIPTION_DEFAULT_BOLD,
  TEXT_DESCRIPTION_LARGE,
  TEXT_DESCRIPTION_LARGE_BOLD
} from '../Themes/ApplicationStyles'

export default class CustomText extends Component {

  static propTypes = {
    primary: PropTypes.any,
    secondary: PropTypes.any,
    description: PropTypes.any,
    small: PropTypes.any,
    medium: PropTypes.any,
    large: PropTypes.any,
    bold: PropTypes.any
  }

  textStyles = () => {
    const { primary, secondary, description, small, medium, large, bold } = this.props

    if (!primary && !secondary && !description && !small && !medium && !large && !bold) return TEXT_PRIMARY_DEFAULT

    if ((primary || !primary) && !secondary && !description) {
      if (small) {
        if (bold) {
          return TEXT_PRIMARY_SMALL_BOLD 
        }
        return TEXT_PRIMARY_SMALL
      }
      if (medium) {
        if (bold) {
          return TEXT_PRIMARY_DEFAULT_BOLD 
        }
        return TEXT_PRIMARY_DEFAULT
      }
      if (large) {
        if (bold) {
          return TEXT_PRIMARY_LARGE_BOLD 
        }
        return TEXT_PRIMARY_LARGE
      }

      return TEXT_PRIMARY_DEFAULT
    }
    if (secondary) {
      if (small) {
        if (bold) {
          return TEXT_SECONDARY_SMALL_BOLD 
        }
        return TEXT_SECONDARY_SMALL
      }
      if (medium) {
        if (bold) {
          return TEXT_SECONDARY_DEFAULT_BOLD 
        }
        return TEXT_SECONDARY_DEFAULT
      }
      if (large) {
        if (bold) {
          return TEXT_SECONDARY_LARGE_BOLD 
        }
        return TEXT_SECONDARY_LARGE
      }

      return TEXT_SECONDARY_DEFAULT
    }
    if (description) {
      if (small) {
        if (bold) {
          return TEXT_DESCRIPTION_SMALL_BOLD 
        }
        return TEXT_DESCRIPTION_SMALL
      }
      if (medium) {
        if (bold) {
          return TEXT_DESCRIPTION_DEFAULT_BOLD 
        }
        return TEXT_DESCRIPTION_DEFAULT
      }
      if (large) {
        if (bold) {
          return TEXT_DESCRIPTION_LARGE_BOLD 
        }
        return TEXT_DESCRIPTION_LARGE
      }

      return TEXT_DESCRIPTION_DEFAULT
    }
  }
  
  render() {
    const { children, style } = this.props
    return (
      <Text 
        style={[this.textStyles(), style]}
        lineBreakMode
      >{ children }</Text>
    )
  }
}
