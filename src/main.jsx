import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'; // Import ColorModeScript
import { BrowserRouter } from 'react-router-dom';
import theme from './theme'; // Import the theme (we'll create this next)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {/* Add ColorModeScript */}
    <BrowserRouter>
      <ChakraProvider theme={theme}> {/* Pass the theme to ChakraProvider */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
