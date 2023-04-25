import styled, { css } from 'styled-components';

export const FilterBar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.interface.controls.background};
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

export const FilterBarSection = styled.div<{ $canExpand?: boolean }>`
  ${({ $canExpand }) => css`
    flex: 0 0 auto;

    ${$canExpand &&
    css`
      flex: 1 1 auto;
      min-width: 0;
    `}
  `}
`;
