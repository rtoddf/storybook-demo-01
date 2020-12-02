import Card from './Card/Card';
import TeaserText from './TeaserText/TeaserText';
import ImageCircle from './ImageCircle/ImageCircle';

import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../Theme/theme';
import { GlobalStyles } from '../Theme/global';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Card />
      <ImageCircle />
      {/* <TeaserText /> */}
    </ThemeProvider>
  );
}

export default App;
