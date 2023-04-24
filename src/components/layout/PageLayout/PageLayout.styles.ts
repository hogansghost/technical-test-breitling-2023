import styled, { css } from 'styled-components';

export const PageLayout = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(100px, 1fr);
    max-width: 100%;
    margin: auto;

    @media (min-width: 768px) {
      grid-template-columns: minmax(32px, 1fr) minmax(100px, 1400px) minmax(32px, 1fr);
    }
  `}
`;

export const PageLayoutSection = styled.div`
  grid-column: 2 / 3;
`;
