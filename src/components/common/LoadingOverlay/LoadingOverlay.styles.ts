import styled, { css } from 'styled-components';

export const LoadingOverlay = styled.div<{ $loading: boolean }>`
  ${({ $loading }) => css`
    transition: opacity 300ms;
    min-height: 100px;

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    ${$loading &&
    css`
      opacity: 0.2;
      &::after {
        background: orange;
      }
    `}
  `}
`;
