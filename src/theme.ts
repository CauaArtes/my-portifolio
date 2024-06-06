import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography:{
    fontFamily: "Open Sans"
      }
});

theme = responsiveFontSizes(theme);

export default theme;
