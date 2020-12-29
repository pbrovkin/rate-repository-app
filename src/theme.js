import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBg: '#283747',
    mainBg: '#e1e4e8',
    button: '#ffffff',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  button: {
    padding: 10,
    margin: 5,
    textAlign: 'center',
    borderRadius: 3,
    color: '#ffffff',
    backgroundColor: '#0366d6',
  },
};

export default theme;