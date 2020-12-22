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
      <Card
        backgroundColor="#1a1a1a"
        boxShadow="6px 6px 18px rgba(0,0,0,1), -16px -16px 18px rgba(58, 58, 58, 1)"
        color="#e5e5e5"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22px"
        onClick={() => {}}
        padding="40px"
        textAlign="right"
      />
      
      <ImageCircle />
      {/* <TeaserText /> */}
    </ThemeProvider>
  );
}

export default App;
