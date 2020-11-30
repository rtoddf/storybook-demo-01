
import React from "react";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from '../src/Theme/theme';

import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // docs: {
  //   theme: themes.dark,
  // },
}

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={darkTheme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ];