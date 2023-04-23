import { CardGrid } from '@/components/common/CardGrid/CardGrid';
import { StyledLink } from '@/components/common/ProductCard/ProductCard';
import styled from 'styled-components';

export const WatchesCardGrid = styled(CardGrid)`
  && {
    gap: 64px;
    grid-template-columns: repeat(4, minmax(100px, 1fr));

    ${StyledLink} {
      position: relative;

      &:not(:nth-of-type(4n + 4)):not(:last-of-type) {
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          right: -32px;
          background: grey;
        }
      }
    }
  }
`;
