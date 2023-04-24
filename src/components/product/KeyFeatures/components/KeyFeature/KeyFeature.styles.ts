import styled from 'styled-components';

export const KeyFeature = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 8px;
  padding: 16px;
`;

export const Icon = styled.div`
  margin: auto;
  display: grid;
  padding: 16px;
  max-width: 100%;
  width: 70px;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  justify-items: center;
  aspect-ratio: 1 / 1;
  background-color: #ebebeb;
  border-radius: 50%;
`;
