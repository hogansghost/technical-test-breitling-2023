import styled, { css } from 'styled-components';

export const NotificationBanner = styled.div`
  background-color: #0e2240;
  color: #fff;
  padding: 8px 32px;
  font-size: 12px;
  text-align: start;
`;

export const NotificationBannerBody = styled.div`
  ${({ theme }) => css`
    display: grid;
    column-gap: 16px;
    grid-template-columns: minmax(0, 1fr) min-content;
    align-items: center;
    margin: auto;
    width: ${theme.dimensions.content.medium};
    max-width: 100%;
  `}
`;
