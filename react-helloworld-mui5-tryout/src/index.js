import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import base_theme from 'assets/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Index = () => {
  let theme = createTheme(base_theme, {
    palette: {
      primary: { main: '#192a56', contrastText: '#ecf0f1' },
      button_black: {
        light: '#2c3e50',
        dark: '#2c3e50',
        main: '#2c3e50',
        contrastText: '#ecf0f1',
      },

      error: {
        light: '#2c3e50',
        dark: '#2c3e50',
        main: '#2c3e50',
        contrastText: '#ecf0f1',
      },  
    },
  });
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
