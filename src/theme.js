import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const greenSeaTheme = extendTheme(
  {
    colors: {
      'green-sea': {
        50: '#E8F6F3',
        100: '#D0ECE7',
        200: '#A2D9CE',
        300: '#73C6B6',
        400: '#45B39D',
        500: '#16A085',
        600: '#138D75',
        700: '#117A65',
        800: '#0E6655',
        900: '#0B5345',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'green-sea' })
);

const pinkTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'pink' }));

export { greenSeaTheme, pinkTheme };
