import styled, { css } from 'styled-components';

export const PageLayout = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(100px, 1fr);
    max-width: 100%;
    margin: auto;

    @media (min-width: 768px) {
      grid-template-columns: minmax(32px, 1fr) minmax(100px, ${theme.dimensions.content.large}) minmax(32px, 1fr);
    }
  `}
`;

export const PageLayoutSection = styled.div<{ $fullWidth?: boolean }>`
  ${({ $fullWidth }) => css`
    @media (min-width: 768px) {
      grid-column: 2 / 3;

      ${$fullWidth &&
      css`
        grid-column: 1 / -1;
      `}
    }
  `}
`;
