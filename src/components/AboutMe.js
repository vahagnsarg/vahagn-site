import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';

const Header = styled('div')`
  position: absolute;
  width: 60vw;
  padding: 10px;
  display: flex;
`;

const Container = styled('div')`
  align-items: center;
  padding: 10px;
`

const LeftSide = styled(Container)`
  display: flex;
  flex-direction: column;
  min-width: 30%;
`

const RightSide = styled(Container)`
  flex-grow: 4;
  align-self: center;
`

const Headshot = styled('img')`
  max-height:190%;  
  background: red;
  transform: translate(-10%, -10%);
`;

const Title = styled('h1')`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  align-self: center;
`;

const HeadContainer = styled('div')`
  height: 100px;
  width: 100px;
  overflow: hidden;
  border-radius: 50%;
  border: solid yellow;
  flex-grow: 4;
`



function AboutMe() {

  return (
    <Header>
      <LeftSide>
      <HeadContainer>
        <Headshot src={"/Headshot.jpg"}/>
      </HeadContainer>
        <Title>Vahagn Sargsyan</Title>
      </LeftSide>
      <RightSide>
        <Text>I am novice FrontEnd developer with many years of custom ServiceNow BackEnd development. I have many hobbies outside of development which include, but are not limited to Golf 🏌🏼‍♂️, Functional Training 🏋🏼‍♀️ and more Golf 🏌🏼‍♂️</Text>
      </RightSide>
    </Header>
  );
}

export default AboutMe;