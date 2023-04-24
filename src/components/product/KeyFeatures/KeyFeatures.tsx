import { KeyFeature } from './components/KeyFeature/KeyFeature';
import * as Styled from './KeyFeatures.styles';

// TODO: These would come from the API types.
export type KeyFeatureType = 'MATERIAL' | 'IP_RATING' | 'DIAMETER' | 'THICKNESS' | 'WEIGHT' | 'BATTERY_LIFE';

export interface KeyFeatureProps {
  type: KeyFeatureType;
  id: string;
  label: string;
  value: string;
}

export interface KeyFeaturesProps {
  features: KeyFeatureProps[];
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => (
  <Styled.KeyFeatures>
    <h2>Key Features</h2>

    <Styled.KeyFeaturesList>
      {features.map((feature) => (
        <KeyFeature key={feature.id} type={feature.type} label={feature.label} value={feature.value} />
      ))}
    </Styled.KeyFeaturesList>
  </Styled.KeyFeatures>
);
