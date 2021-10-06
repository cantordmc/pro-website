import Site from './Site';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, orange } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core/styles";


const custom_theme = createTheme({
  palette: {
    mode: "dark",
    primary: orange,
    secondary: blueGrey,
    background: '#263238'
  }
})

function App() {
  return (
      <ThemeProvider theme={custom_theme}>
        <Site />
      </ThemeProvider>
  );
}

export default App;
