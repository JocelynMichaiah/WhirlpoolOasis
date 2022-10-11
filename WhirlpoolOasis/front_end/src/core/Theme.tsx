import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
      contrastText: '#0050c7',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#2651b8',
    },
    text: {
      primary: '#bdbdbd',
      secondary: '#bdbdbd',
    }
  },
});