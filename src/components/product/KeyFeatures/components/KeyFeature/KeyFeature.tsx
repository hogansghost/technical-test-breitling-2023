import { KeyFeatureProps, KeyFeatureType } from '../../KeyFeatures';
import * as Styled from './KeyFeature.styles';

const getTypeIcon = (type: KeyFeatureType) => {
  switch (type) {
    case 'IP_RATING': {
      return <>IP_RATING</>;
    }
    case 'DIAMETER': {
      return <>DIAMETER</>;
    }
    case 'THICKNESS': {
      return <>THICKNESS</>;
    }
    case 'WEIGHT': {
      return <>WEIGHT</>;
    }
    case 'BATTERY_LIFE': {
      return <>BATTERY_LIFE</>;
    }
    default:
    case 'MATERIAL': {
      return <>MATERIAL</>;
    }
  }
};

export const KeyFeature: React.FC<Omit<KeyFeatureProps, 'id'>> = ({ type, label, value }) => (
  <article>
    <Styled.Icon>ICON</Styled.Icon>

    <p>{label}</p>
    <p>{value}</p>
  </article>
);
