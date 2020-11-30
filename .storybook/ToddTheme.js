import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  colorPrimary: '#666',
  colorSecondary: 'deepskyblue',

  // UI
  // left side bar
  appBg: '#3a3a3a',
  // bottom right
  appContentBg: '#5a5a5a',
  appBorderColor: '#cdcdcd',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#cdcdcd',
  barSelectedColor: 'white',
  barBg: '#003264',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});