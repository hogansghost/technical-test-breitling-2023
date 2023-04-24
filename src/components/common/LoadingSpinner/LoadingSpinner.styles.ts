import styled, { css } from 'styled-components';
import { LoadingSpinnerSizes } from './LoadingSpinner.types';

export const LoadingSpinner = styled.div<{ $size: LoadingSpinnerSizes }>`
  ${({ $size, theme }) => css`
    position: relative;

    &::before {
      content: '';
      display: block;
      border: solid #efefef;
      border-bottom-color: black;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      animation: 700ms linear infinite LoadingSpinner;

      /* Sizes. */
      ${$size === 'medium' &&
      css`
        width: 20px;
        border-width: 1px;
      `}

      ${$size === 'large' &&
      css`
        width: 40px;
        border-width: 2px;
      `}
    }

    @keyframes LoadingSpinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
