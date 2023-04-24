import Link from 'next/link';
import styled from 'styled-components';

export const LinkIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 28px;
  height: 28px;
  text-decoration: none;
  color: black;
  transition: color 200ms;

  &:focus,
  &:active,
  &:hover {
    color: #ffc62d;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;
