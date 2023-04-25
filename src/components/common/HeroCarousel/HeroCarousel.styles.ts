import NextImage from 'next/image';
import styled, { css } from 'styled-components';

export const HeroCarousel = styled.div`
  position: relative;
  background-color: #0e2240;
  color: #fff;
  font-size: 12px;
  text-align: start;
`;

export const Background = styled(NextImage)`
  object-fit: cover;
  pointer-events: none;
`;

export const HeroCarouselBody = styled.div`
  ${({ theme }) => css`
    padding: 8px 32px;
    min-height: 500px;
    position: relative;
    display: grid;
    column-gap: 16px;
    color: white;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    margin: auto;
    width: ${theme.dimensions.content.large};
    max-width: 100%;
  `}
`;
