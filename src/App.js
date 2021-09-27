import logo from './logo.svg';
import './App.css';
import Site from './Site';
import { blueGrey, orange } from '@material-ui/core/colors'

import { createTheme } from '@mui/material/styles';
import { ThemeProvider} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: orange
    }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Site />
      </ThemeProvider>
  );
}

export default App;
