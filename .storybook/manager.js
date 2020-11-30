import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import toddTheme from './ToddTheme';

addons.setConfig({
    theme: toddTheme,
});

// https://storybook.js.org/docs/react/configure/theming