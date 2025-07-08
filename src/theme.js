import { extendTheme } from '@chakra-ui/react';

// 1. Define the config
const config = {
  initialColorMode: 'light', // Set initial color mode
  useSystemColorMode: false, // Don't use system preference
};

// 2. Extend the theme
const theme = extendTheme({ config });

export default theme;
