import styled from 'styled-components';

// TODO: Replace with flexbox or something better?
export const ProductHeroArea = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(min(480px, 100%), 1fr));
  gap: 32px;
  padding-block: 32px;
  max-width: 100%;
`;
