import React from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe'

const Root = styled('div')`
  background: lightblue;
  height: 100vh;
  width: 100vw;
  margin: 0;
`

function App() {
  return (
    <Root>
      <AboutMe/>
    </Root>
  );
}

export default App;
