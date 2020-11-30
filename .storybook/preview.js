
import React from "react";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from '../src/Theme/theme';
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // themes: [
  //   { name: 'twitter', class: 'theme-twt', color: '#00aced', default: true },
  //   { name: 'facebook', class: 'theme-fb', color: '#3b5998' }
  // ]
  backgrounds: {
    default: 'Dark theme',
    values: [
      {
        name: 'Light theme',
        value: '#e5e5e5',
      },
      {
        name: 'Dark theme',
        value: '#1a1a1a',
      },
    ],
  },
  docs: {
    theme: themes.light,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
];