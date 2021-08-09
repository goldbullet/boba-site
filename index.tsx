import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <p>Start editing to see some magic happen :)</p>
    </ChakraProvider>
  );
}

render(<App />, document.getElementById('root'));
