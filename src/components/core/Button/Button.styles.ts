import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  text-decoration: none;
  color: black;
  background-color: #ffc62d;
  transition: color 200ms, background-color 200ms;
  border: 0;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    color: white;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;
