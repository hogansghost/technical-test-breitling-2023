import styled from 'styled-components';
import { KeyFeature } from './components/KeyFeature/KeyFeature.styles';

export const KeyFeatures = styled.div``;

export const KeyFeaturesList = styled.ul`
  display: flex;
  gap: 32px;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  ${KeyFeature} {
    flex: 0 1 auto;
    width: 200px;
    max-width: 100%;
  }
`;
