import styled from "styled-components";
import {
  space,
  typography,
  color,
  TypographyProps,
  SpaceProps
} from "styled-system";


export const  Text = styled.div<TypographyProps & SpaceProps>`
  label: Text;
  color: #fff;
  ${space};
  ${typography};
  ${color}
`;

Text.displayName = "Text";

export const UppercaseText = styled(Text)`
  label: UppercaseText;
  text-transform: uppercase;
`;
