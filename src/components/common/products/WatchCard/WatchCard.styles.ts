import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { Text } from '../../../core/Text/Text';

export const Image = styled(NextImage)`
  object-fit: cover;
`;

export const WatchIdText = styled(Text)`
  && {
    ${({ theme }) => css`
      color: #77777a;
      text-transform: uppercase;
      font-size: ${theme.font.size.body.extraSmall};
    `}
  }
`;

export const WatchNameText = styled(Text)`
  && {
    ${({ theme }) => css`
      color: #111820;
      font-weight: ${theme.font.weight.semiBold};
      overflow: hidden;
      text-transform: uppercase;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    `}
  }
`;

export const WatchPriceText = styled(Text)`
  && {
    ${({ theme }) => css`
      color: #111820;
      font-weight: ${theme.font.weight.semiBold};
      text-transform: uppercase;
    `}
  }
`;
