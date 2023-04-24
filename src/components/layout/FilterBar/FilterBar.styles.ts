import styled, { css } from 'styled-components';

export const FilterBar = styled.div`
  ${({ theme }) => css`
    background-color: #fafafa;
  `}
`;

export const FilterBarBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.spacing(4)};
    padding: ${theme.spacing(3)} ${theme.spacing(2)};
    width: ${theme.dimensions.content.large};
    max-width: 100%;
    margin: auto;
  `}
`;

export const FilterBarSection = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing(2)};
    grid-template-columns: minmax(100px, 1fr);
  `}
`;
