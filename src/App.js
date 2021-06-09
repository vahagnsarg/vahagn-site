import React from 'react';
import styled from 'styled-components';
import AboutMe from './components/AboutMe'

const Root = styled('div')`
  justify-content: center;
  text-align: center;
  background: lightblue;
  height: 100vh;
  width: 100vw;
  display: flex;
`

function App() {
  return (
    <Root>
      <AboutMe/>
    </Root>
  );
}

export default App;
