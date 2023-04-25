import styled from 'styled-components';

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 28px;
  height: 28px;
  text-decoration: none;
  color: inherit;
  transition: color 200ms, background-color 200ms;
  background: none;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    color: #ffc62d;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
