
import React from "react";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from '../src/Theme/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
];