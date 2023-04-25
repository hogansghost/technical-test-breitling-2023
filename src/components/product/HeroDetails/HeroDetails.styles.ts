import styled from 'styled-components';

export const HeroDetails = styled.div`
  display: grid;
  grid-template-rows: min-content minmax(40px, 1fr) 64px;
  grid-template-columns: minmax(20px, 40px) minmax(40px, 1fr) minmax(20px, 160px) minmax(20px, 40px);

  @media (min-width: 768px) {
    grid-template-columns: minmax(20px, 120px) minmax(40px, 1fr) minmax(20px, 120px) minmax(20px, 60px);
  }
`;

export const HeroDetailsImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const HeroDetailsHeader = styled.div`
  padding: 16px;
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
`;

export const HeroDetailsBody = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  background: rgba(255, 198, 45, 0.85);
  padding: 32px;
  backdrop-filter: blur(8px);
`;
