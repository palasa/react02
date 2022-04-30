import { ChakraProvider, Heading, ThemeProvider, Box } from '@chakra-ui/react';
import { Component } from 'react';
import { Counter, ToggleColorMode } from './Components';
import { greenSeaTheme, pinkTheme } from './theme';

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <ThemeProvider theme={greenSeaTheme}>
          <Box pos="absolute" right={5} top={5}>
            <ToggleColorMode />
          </Box>
          <Heading>Test</Heading>
          <Counter />
        </ThemeProvider>
      </ChakraProvider>
    );
  }
}

export default App;
