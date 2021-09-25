import logo from './logo.svg';
import './App.css';
import Site from './Site';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62717b',
      main: '#37464f',
      dark: '#101f27',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffad42',
      main: '#f57c00',
      dark: '#bb4d00',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Site />
      </MuiThemeProvider>
  );
}

export default App;
