import { ProductCardLink } from '@/components/common/ProductCard/ProductCard.styles';
import { CardGrid } from '@/components/layout/CardGrid/CardGrid';
import styled from 'styled-components';

export const WatchesCardGrid = styled(CardGrid)`
  && {
    gap: 64px;
    grid-template-columns: repeat(4, minmax(100px, 1fr));

    ${ProductCardLink} {
      position: relative;

      &:not(:nth-of-type(4n + 4)):not(:last-of-type) {
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 20%;
          padding-bottom: 60%;
          width: 1px;
          right: -32px;
          background: #efefef;
          pointer-events: none;
        }
      }
    }
  }
`;
