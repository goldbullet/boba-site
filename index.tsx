import '@fontsource/lobster/400.css';
import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import theme from './theme';
import Home from './Home';
import Multiply from './math/Multiply';
import Division from './math/Division';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Nav />
        <Switch>
          <Route path="/math/multiply">
            <Multiply />
          </Route>
          <Route path="/math/division">
            <Division />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
