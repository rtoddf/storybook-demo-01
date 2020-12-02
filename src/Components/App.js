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
        backgroundColor="rgba(106,106,106,1)"
        boxShadow="6px 6px 18px rgba(0,0,0,1), -6px -6px 18px rgba(255, 58, 58, 1)"
        color="#e5e5e5"
        fontFamily="Lucida Console, Courier, monospace"
        fontSize="22px"
        onClick={() => {}}
        textAlign="center"
      />
      
      <ImageCircle />
      {/* <TeaserText /> */}
    </ThemeProvider>
  );
}

export default App;
