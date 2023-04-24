import { Text } from '@/components/core/Text/Text';
import { FeatureDiameterIcon } from '@/components/core/icons/FeatureDiameterIcon';
import { FeatureThicknessIcon } from '@/components/core/icons/FeatureThicknessIcon';
import { KeyFeatureProps, KeyFeatureType } from '../../KeyFeatures';
import * as Styled from './KeyFeature.styles';

const getTypeIcon = (type: KeyFeatureType) => {
  switch (type) {
    case 'IP_RATING': {
      return <FeatureDiameterIcon />;
    }
    case 'DIAMETER': {
      return <FeatureThicknessIcon />;
    }
    case 'THICKNESS': {
      return <FeatureDiameterIcon />;
    }
    case 'WEIGHT': {
      return <FeatureThicknessIcon />;
    }
    case 'BATTERY_LIFE': {
      return <FeatureDiameterIcon />;
    }
    default:
    case 'MATERIAL': {
      return <FeatureThicknessIcon />;
    }
  }
};

export const KeyFeature: React.FC<Omit<KeyFeatureProps, 'id'>> = ({ type, label, value }) => (
  <Styled.KeyFeature>
    <Styled.Icon>{getTypeIcon(type)}</Styled.Icon>

    <div>
      <Text>{label}</Text>
      <Text weight="semiBold" size="small">
        {value}
      </Text>
    </div>
  </Styled.KeyFeature>
);
