import React from "react";
import styled from "styled-components";
import NavigationOptions from "./Common/NavgiationOptions";
import { UppercaseText } from "./Common/Text";
// import Images from "../assets/Icons";

const NavbarLayout = styled("div")`
  height: 100px;
  width: 100%;
  border: 1px #000 solid;
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
`;

const HeadShotContainer = styled("div")`
  height: 100px;
  width: 100px;
  overflow: hidden;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Navbar() {
  return (
    <NavbarLayout>
      <NameAndPhto>
        <HeadShotContainer>
          <HeadshotImg src={"/Headshot.jpg"} />
        </HeadShotContainer>
        <UppercaseText m={20} fontWeight={900}>
          Vahagn Sargsyan
        </UppercaseText>
      </NameAndPhto>
      <NavigationOptions />
    </NavbarLayout>
  );
}
