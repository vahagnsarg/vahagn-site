import React from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Images from "./assets/Icons";
import { ParallaxProvider } from "react-scroll-parallax";

const Root = styled("div")`
  background: #4095c6;
  width: 100vw;
  margin: 0;
`;

function App() {
  return (
    <ParallaxProvider>
      <Root>
        <AboutMe />
      </Root>
    </ParallaxProvider>
  );
}

export default App;
