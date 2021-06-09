import styled from 'styled-components';
import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
} from 'styled-system';

const Text = styled('div')`
  label: Text;
  ${space};
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
`;

Text.displayName = 'Text';

const UppercaseText = styled(Text)`
  label: UppercaseText;
  text-transform: uppercase;
`;

export { Text, UppercaseText };
