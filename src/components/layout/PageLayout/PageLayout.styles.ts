import styled, { css } from 'styled-components';

export const PageLayout = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(16px, 1fr) minmax(100px, ${theme.dimensions.content.large}) minmax(16px, 1fr);
    max-width: 100%;
    margin: auto;
    padding-block-end: 120px;

    @media (min-width: 768px) {
      grid-template-columns: minmax(32px, 1fr) minmax(100px, ${theme.dimensions.content.large}) minmax(32px, 1fr);
    }
  `}
`;

export const PageLayoutSection = styled.div<{ $fullWidth?: boolean }>`
  ${({ $fullWidth }) => css`
    grid-column: 2 / 3;

    @media (min-width: 768px) {
      ${$fullWidth &&
      css`
        grid-column: 1 / -1;
      `}
    }
  `}
`;

// TODO: Margin size prop.
export const PageLayoutDivider = styled.hr`
  position: relative;
  border: 0;
  grid-column: 1 / -1;
  margin-block: 120px;

  &::before {
    content: '';
    display: block;
    margin: auto;
    width: clamp(200px, 60%, 100%);
    background: #efefef;
    height: 1px;
  }
`;
