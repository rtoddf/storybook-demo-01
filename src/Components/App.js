import TeaserText from './TeaserText';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../Theme/theme';
import { GlobalStyles } from '../Theme/global';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <TeaserText />
    </ThemeProvider>
  );
}

export default App;
