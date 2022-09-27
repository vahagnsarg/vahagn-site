import React from "react";
import styled from "styled-components";
import { Text } from "./Text";

const Container = styled.div`
  width: 50%;
  border: 5px yellow solid;
  height: 100%;
`;

export default function NavigationOptions() {
  return (
    <Container>
      <Text>Navigation Options</Text>
    </Container>
  );
}
