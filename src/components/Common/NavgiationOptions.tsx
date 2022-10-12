import React from "react";
import styled from "styled-components";
import { Text } from "./Text";

const Container = styled.div`
  display: flex;
  width: 50%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  height: inherit;
  background: red;
  border-right: #fff solid;
  align-items: center;
  cursor: pointer;
`;

export default function NavigationOptions() {
  return (
    <Container>
      <Option>
        <Text>About Me</Text>
      </Option>
      <Option>
        <Text>Skills</Text>
      </Option>
      <Option>
        <Text>Golf</Text>
      </Option>
      <Option>
        <Text>Something</Text>
      </Option>
    </Container>
  );
}
