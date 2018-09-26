import { BLACK, WHITE, ORANGE, GREY } from './Colors'
import Fonts from './Fonts'
import { Platform } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { BASE_MARGIN, SECTION as SIZE_SECTION } from './Metrics'

export const CONTAINER_V2 = {
  backgroundColor: WHITE,
  flex: 1,
  marginBottom: isIphoneX() ? 35 : 0
}

export const ROW = {
  flexDirection: 'row'
}

//button primary
export const BUTTON_PRIMARY = {
  backgroundColor: BLACK,
  ...Fonts.style.button
}

//button secondary
export const BUTTON_SECONDARY = {
  backgroundColor: ORANGE,
  ...Fonts.style.button
}

//text primary
export const TEXT_PRIMARY_SMALL = {
  color: BLACK,
  ...Fonts.style.small
}

export const TEXT_PRIMARY_SMALL_BOLD = {
  color: BLACK,
  ...Fonts.style.smallBold
}

export const TEXT_PRIMARY_DEFAULT = {
  color: BLACK,
  ...Fonts.style.medium
}

export const TEXT_PRIMARY_DEFAULT_BOLD = {
  color: BLACK,
  ...Fonts.style.mediumBold
}

export const TEXT_PRIMARY_LARGE = {
  color: BLACK,
  ...Fonts.style.large
}

export const TEXT_PRIMARY_LARGE_BOLD = {
  color: BLACK,
  ...Fonts.style.largeBold
}

//text secondary
export const TEXT_SECONDARY_SMALL = {
  color: ORANGE,
  ...Fonts.style.small
}

export const TEXT_SECONDARY_SMALL_BOLD = {
  color: ORANGE,
  ...Fonts.style.smallBold
}

export const TEXT_SECONDARY_DEFAULT = {
  color: ORANGE,
  ...Fonts.style.medium
}

export const TEXT_SECONDARY_DEFAULT_BOLD = {
  color: ORANGE,
  ...Fonts.style.mediumBold
}

export const TEXT_SECONDARY_LARGE = {
  color: ORANGE,
  ...Fonts.style.large
}

export const TEXT_SECONDARY_LARGE_BOLD = {
  color: ORANGE,
  ...Fonts.style.largeBold
}

//text description
export const TEXT_DESCRIPTION_SMALL = {
  color: GREY,
  ...Fonts.style.small
}

export const TEXT_DESCRIPTION_SMALL_BOLD = {
  color: GREY,
  ...Fonts.style.smallBold
}

export const TEXT_DESCRIPTION_DEFAULT = {
  color: GREY,
  ...Fonts.style.medium
}

export const TEXT_DESCRIPTION_DEFAULT_BOLD = {
  color: GREY,
  ...Fonts.style.mediumBold
}

export const TEXT_DESCRIPTION_LARGE = {
  color: GREY,
  ...Fonts.style.large
}

export const TEXT_DESCRIPTION_LARGE_BOLD = {
  color: GREY,
  ...Fonts.style.largeBold
}


// MARGIN & PADDING

export const MARGIN_HORIZONTAL_10 = {
  marginHorizontal: BASE_MARGIN
}

export const MARGIN_HORIZONTAL_25 = {
  marginHorizontal: SIZE_SECTION
}

export const MARGIN_VERTICAL_25 = {
  marginVertical: SIZE_SECTION
}

export const MARGIN_VERTICAL_10 = {
  arginVertical: BASE_MARGIN
}

export const PADDING_VERTICAL_25 = {
  paddingVertical: SIZE_SECTION
}

export const PADDING_VERTICAL_10 = {
  paddingVertical: BASE_MARGIN
}

export const PADDING_HORIZONTAL_25 = {
  paddingHorizontal: SIZE_SECTION
}

export const PADDING_HORIZONTAL_10 = {
  paddingHorizontal: BASE_MARGIN
}

export const SECTION = {
  marginVertical: SIZE_SECTION,
  marginHorizontal: SIZE_SECTION
}
