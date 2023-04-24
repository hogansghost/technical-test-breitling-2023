import Link from 'next/link';
import styled from 'styled-components';

export const ProductCardLink = styled(Link)`
  text-decoration: none;
  display: grid;
  gap: 32px;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: min-content;
  padding: 16px;
  text-align: center;
  transition: background-color 200ms;

  &:focus-within {
    outline: 0;
  }

  &:focus-within,
  &:hover {
    background-color: #fafafa;
  }
`;

export const ProductCardImage = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
`;
