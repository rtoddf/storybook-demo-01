import TeaserText from './TeaserText/TeaserText';
import Button from './Button';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../Theme/theme';
import { GlobalStyles } from '../Theme/global';

const bio = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl.';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <TeaserText
        backgroundColor="#e5e5e5"
        color="#666"
        onClick={() => {}}
        size="large"
      />
    </ThemeProvider>
  );
}

export default App;
