import React from "react";
import styled from "styled-components";
import Images from "../assets/Icons";
import SkillScale from "./Common/SkillScale";


export default function Skills() {
  return (
    <>
      <SkillScale name="JavaScript" image="JSIcon" selected={8}/>
      <SkillScale name="TypeScript" image="TSLogo" selected={6}/>
      <SkillScale name="NodeJS" image="NodeIcon" selected={7}/>
      <SkillScale name="ReactJS" image="ReactIcon" selected={8}/>
      <SkillScale name="React Native" image="ReactNativeLogo" selected={6}/>
    </>
  );
}
