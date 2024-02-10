export const colors = {
  textDisabled: '#D2D3E1',
  shadow: '#2C3FA333',
  primary: '#2C3FA3',
  primaryLight: '#3549AF',
  primaryDesaturated: '#3B51B9',
  primaryWhite: '#F4F5F8',
  borderDefault: '#E3E3ED',
};

export const theme = {
  global: {
    text: {
      textPrimary: '#272937',
      textDisabled: colors.textDisabled,
      textSecondary: '#7D7F90',
      textInverted: 'white',
    },
    borders: {
      borderDefault: colors.textDisabled,
      borderHover: colors.borderDefault,
      borderTyped: colors.textDisabled,
      borderFocused: colors.borderDefault,
      borderDisabled: colors.primaryWhite,
    },
    alert: {
      success: '#66bb6a',
      error: '#f44336',
    },
  },
  button: {
    shadow: colors.shadow,
    primary: {
      // default
      backgroundDefault: colors.primary,
      borderDefault: 'transparent',
      backgroundRightDefault: colors.primaryLight,

      // hover
      backgroundHover: colors.primaryLight,
      borderHover: 'transparent',
      backgroundRightHover: colors.primaryDesaturated,

      // pressed
      backgroundPressed: colors.primaryDesaturated,
      borderPressed: 'transparent',
      backgroundRightPressed: '#7483D0',

      // focused
      backgroundFocused: colors.primary,
      borderFocused: 'transparent',
      backgroundRightFocused: colors.primaryLight,

      // disabled
      backgroundDisabled: '#EFF0F5',
      borderDisabled: 'transparent',
      backgroundRightDisabled: colors.primaryWhite,

      // button text colors
      textDefault: 'white',
    },
    outlined: {
      // default
      backgroundDefault: 'white',
      borderDefault: colors.primary,

      // hover
      backgroundHover: 'white',
      borderHover: colors.primary,

      // pressed
      backgroundPressed: colors.primaryWhite,
      borderPressed: colors.primary,

      // focused
      backgroundFocused: 'white',
      borderFocused: colors.primary,

      // disabled
      backgroundDisabled: 'white',
      borderDisabled: colors.textDisabled,

      // button text colors
      textDefault: colors.primary,
    },
  },
  input: {
    backgroundDefault: 'white',
    backgroundHover: 'white',
    backgroundTyped: 'white',
    backgroundFocused: 'white',
    backgroundDisabled: colors.primaryWhite,
  },
};
