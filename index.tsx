import '@fontsource/lobster/400.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import theme from './theme';
import Home from './Home';
import Addition from './math/Addition';
import Subtraction from './math/Subtraction';
import Multiply from './math/Multiply';
import Division from './math/Division';

function App() {
  const [state, setState] = useState();
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Nav refresh={setState} />
        <Switch>
          <Route path="/math/addition">
            <Addition />
          </Route>
          <Route path="/math/subtraction">
            <Subtraction />
          </Route>
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
