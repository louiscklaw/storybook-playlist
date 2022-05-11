export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';

import { muiTheme } from '../src/stylesheet';

addDecorator((story) => (
  <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
));
