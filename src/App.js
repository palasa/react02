import { ChakraProvider, Heading, ThemeProvider, Box } from '@chakra-ui/react';
// import { theme } from "@chakra-ui/react";
import { Component } from 'react';
import { ToggleColorMode } from './Components';
import { greenSeaTheme } from './theme';

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <ThemeProvider theme={greenSeaTheme}>
          <Box pos="absolute" right={5} top={5}>
            <ToggleColorMode />
          </Box>

          <Heading>Test</Heading>
        </ThemeProvider>
      </ChakraProvider>
    );
  }
}

export default App;
