import React from "react";
import styled from "styled-components";
import Images from "../../assets/Icons";
import { Text } from "./Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
`;

const Scale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  margin: 2px;
  border: 1px solid #4095c6;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20px;
  width: 20px;
`;
const Selected = styled(Circle)`
  background: #4095c6;
`;

const NonSelected = styled(Circle)`
  background: red;
`;
const MianImage = styled.img`
  width: 30px;
  margin: 10px;
`;

const getSelected = (count, selected) => {
  const result = [];
  let recieved = 0;
  while (recieved < count) {
    result.push(selected ? <Selected /> : <NonSelected />);
    recieved++;
  }

  return result;
};

export default function SkillScale(props) {
  const image = Images[props.image];
  const selected = getSelected(props.selected, true);

  const remainder = 10 - props.selected;
  const notSelected = getSelected(remainder, false);

  return (
    <Container>
      <Text>{props.name}</Text>
      <Scale>
        <MianImage src={image} alt={props.image} />
        {selected}
        {notSelected}
      </Scale>
    </Container>
  );
}
