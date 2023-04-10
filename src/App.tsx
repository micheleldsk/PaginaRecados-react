import CssBaseline from '@mui/material/CssBaseline';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
