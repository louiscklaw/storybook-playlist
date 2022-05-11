import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import base_theme from '../src/assets/theme';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

const withThemeProvider = (Story, context) => {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
};

export const decorators = [withThemeProvider];
