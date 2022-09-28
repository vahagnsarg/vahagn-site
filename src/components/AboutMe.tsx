import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Images from "../assets/Icons";
import { Text } from "./Common/Text";
import { Parallax } from "react-scroll-parallax";

const Container = styled("div")`
  display: flex;
  height: 100%;
  padding-bottom: 100vh;
  flex-direction: column;
`;

const ImageOne = styled.div`
  height: 600px;
  width: 100%;
  overflow: contain;
  background-image: url(${Images.VectorBackground});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AboutMe() {
  return (
    <Container>
      {/* NAVBAR Thats Collapsable */}
      <Navbar />

      <Parallax speed={10}>
        <ImageOne>
          <Parallax speed={-20}>
            <Text fontSize={80} fontWeight={900}>
              Did I Ask?
            </Text>
          </Parallax>
        </ImageOne>
      </Parallax>

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
