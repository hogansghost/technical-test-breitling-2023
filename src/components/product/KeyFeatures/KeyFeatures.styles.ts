import styled from 'styled-components';
import { KeyFeature } from './components/KeyFeature/KeyFeature.styles';

export const KeyFeatures = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 32px;
`;

export const KeyFeaturesList = styled.ul`
  display: flex;
  gap: 32px;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  ${KeyFeature} {
    flex: 0 1 auto;
    min-width: 0;
    width: 160px;
    max-width: 100%;
  }
`;
