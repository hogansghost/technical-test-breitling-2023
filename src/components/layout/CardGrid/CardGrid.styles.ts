import styled, { css } from 'styled-components';

export const CardGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(2)};
    grid-template-columns: minmax(100px, 1fr);
    max-width: 100%;
  `}
`;
