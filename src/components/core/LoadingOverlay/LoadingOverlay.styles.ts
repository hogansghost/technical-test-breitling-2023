import styled, { css } from 'styled-components';

export const LoadingOverlay = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: auto;
  min-height: 100px;
`;

export const LoadingOverlaySpinner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: center;
  align-items: center;
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
`;

export const LoadingOverlayContent = styled.div<{ $isLoading: boolean }>`
  ${({ $isLoading, theme }) => css`
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    transition: opacity 200ms;

    ${$isLoading &&
    css`
      opacity: 0.3;
    `}
  `}
`;
