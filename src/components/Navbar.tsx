import React from "react";
import styled from "styled-components";
import NavigationOptions from "./Common/NavgiationOptions";
import { UppercaseText } from "./Common/Text";

const NavbarLayout = styled("div")`
  background: #4095c6;
  height: 100px;
  //width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const NameAndPhto = styled("div")`
  display: flex;
  align-items: center;
`;

const HeadshotImg = styled("img")`
  width: 100px;
  -webkit-user-drag: none;
`;

const HeadShotContainer = styled("div")`
  height: 100px;
  width: 100px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  border: 5px #000 solid;
`;

export default function Navbar() {
  return (
    <NavbarLayout>
      <NameAndPhto>
        <HeadShotContainer>
          <HeadshotImg src={require("../assets/headshot.jpg")} />
        </HeadShotContainer>
        <UppercaseText pl={50} fontWeight={900} fontSize={40}>
          Vahagn Sargsyan
        </UppercaseText>
      </NameAndPhto>
      <NavigationOptions />
    </NavbarLayout>
  );
}
