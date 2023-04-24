import NextLink from 'next/link';
import styled, { css } from 'styled-components';

export const Link = styled(NextLink)<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => css`
    color: black;
    text-decoration: none;
    transition: color 200ms;

    &:focus,
    &:active,
    &:hover {
      color: #ffc62d;
    }

    ${$isActive &&
    css`
      color: #ffc62d;
    `}
  `}
`;
