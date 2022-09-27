import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Skills from "./Skills";
import { Text } from "./Common/Text";
import Images from "../assets/Icons";

const Container = styled("div")`
  display: flex;
  height: 100%;
`;

const LeftThird = styled("div")`
  width: 30%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RightTwoThird = styled("h1")`
  width: 70%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;



export default function AboutMe() {
  return (
    <Container>
      {/* NAVBAR Thats Collapsable */}
      <Navbar />

      {/* <LeftThird>
        <Text>Vahagn Sargsyan</Text>
        <Text>My Skills</Text>
        <Skills />
      </LeftThird>
      <RightTwoThird>
        <Text>
          I am novice FrontEnd developer with many years of custom ServiceNow
          BackEnd development. I have many hobbies outside of development which
          include, but are not limited to Golf{" "}
          <span role="img" aria-label="golf-man">
            🏌🏼‍♂️
          </span>
          , Functional Training{" "}
          <span role="img" aria-label="training-man">
            🏋🏼‍♀️
          </span>{" "}
          and more Golf{" "}
          <span role="img" aria-label="training-man">
            🏌🏼‍♂️
          </span>
        </Text>
      </RightTwoThird> */}
    </Container>
  );
}
