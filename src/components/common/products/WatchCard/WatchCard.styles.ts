import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { Text } from '../../Text/Text';

export const Image = styled(NextImage)`
  object-fit: cover;
`;

export const WatchIdText = styled(Text)`
  && {
    ${({ theme }) => css`
      color: #77777a;
      text-transform: uppercase;
      font-size: 12px;
    `}
  }
`;
export const WatchNameText = styled(Text)`
  && {
    ${({ theme }) => css`
      color: #111820;
      font-weight: ${theme.font.weight.semiBold};
      text-transform: uppercase;
    `}
  }
`;
