import React from "react";
import styled from "styled-components";
import { Text } from "./Text";

const Container = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  min-width: 100px;
  padding: 0 10px;
  margin: 0 10px;
  background: red;
  border-radius: 20px;
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
