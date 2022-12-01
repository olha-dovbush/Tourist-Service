export const COLORS = {
  LightSeaGreen: '#28B0A6',
  MaximumYellowRed: '#F5A623',
  RedCrayola: '#E81A46',
  RedCrayolaLight: '#EE5879',
  RedCrayolaLighter: '#F9C7D2',
  RedRYB: '#FA3E2C',
  OxfordBlue: '#1D293F',
  Celeste: '#BCF0EC',
  AntiqueWhite: '#FEF2DE',
  White: '#fff',
  GRAY: {
    SlateGray: '#546179',
    CharlestonGreen: '#212529',
    CadetGray: '#99A3AD',
    OffWhite: '#FBFBFB',
    Cultured: '#F8F9FA',
    OffCultured: '#E9ECEF',
    Gainsboro: '#DCE5EB',
    LightGray: '#CED4D9',
    DavysGrey: '#495056',
    Gunmetal: '#343A3F',
  },
};

export const WEIGHT = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const QUERIES = {
  upToMobile: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  upToTablet: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  upToLaptop: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.mobileMax / 16}rem) and 
    (max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};

export const brandColors = {
  red: '#820813',
  bg: '#e2cebc',
  light: '#f4e6d7',
  dark: '#181818',
  gold: '#ccb750',
  yellow: '#dec05f',
  brown: '#3c3a36',
  white: '#fff',
  blue: '#5eadd4',
};

export const containerWidth = window.innerWidth < 2200 ? '86vw' : '80vw';
