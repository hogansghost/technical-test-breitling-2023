import styled, { css } from 'styled-components';

import { TextSizes, TextWeights } from './Text.types';

export const StyledText = styled.p<{
  $preserveWhitespace: boolean;
  $size: TextSizes;
  $weight: TextWeights;
}>`
  ${({ $preserveWhitespace, $size, $weight, theme }) => css`
    display: block;
    margin: 0;
    font-size: ${theme.font.size.body[$size]};
    font-weight: ${theme.font.weight[$weight]};
    word-break: break-word;
    overflow-wrap: break-word;

    /* PreserveWhitespace - preserve white-space */
    ${$preserveWhitespace &&
    css`
      white-space: pre-wrap;
    `}
  `}
`;
