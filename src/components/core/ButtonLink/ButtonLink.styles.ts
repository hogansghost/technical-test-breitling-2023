import Link from 'next/link';
import styled from 'styled-components';

export const ButtonLink = styled(Link)`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  text-decoration: none;
  color: black;
  background-color: #ffc62d;
  transition: color 200ms, background-color 200ms;
  border: 0;
  text-align: center;
  border-radius: 1px;
  font-size: 16px;
  font-weight: 700;

  &:focus,
  &:active,
  &:hover {
    color: white;
  }
`;
