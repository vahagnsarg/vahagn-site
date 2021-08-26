import React from "react";
import styled from "styled-components";
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

const Headshot = styled("img")`
  width: 150px;
`;

const HeadShotContainer = styled("div")`
  height: 150px;
  width: 150px;
  overflow: hidden;
  border-radius: 100%;
  border: 3px solid black;
  justify-content: center;
  align-items: center;
`;

function AboutMe() {
  return (
    <Container>
      <LeftThird>
        <HeadShotContainer>
          <Headshot src={"/Headshot.jpg"} />
        </HeadShotContainer>
        <Text>Vahagn Sargsyan</Text>
        <Text>My Skills</Text>
        <Skills />
      </LeftThird>
      <RightTwoThird>
        <Text>
          I am novice FrontEnd developer with many years of custom ServiceNow
          BackEnd development. I have many hobbies outside of development which
          include, but are not limited to Golf 🏌🏼‍♂️, Functional Training 🏋🏼‍♀️ and
          more Golf 🏌🏼‍♂️
        </Text>
      </RightTwoThird>
    </Container>
  );
}

export default AboutMe;
