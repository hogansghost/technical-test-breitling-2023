import { ProductCardLink } from '@/components/common/ProductCard/ProductCard.styles';
import { CardGrid } from '@/components/layout/CardGrid/CardGrid';
import styled from 'styled-components';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 64px;
  padding-block: 64px;
`;

export const ProductListGridFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;

export const ProductListGrid = styled(CardGrid)`
  && {
    gap: 64px;
    grid-template-columns: minmax(100px, 1fr);

    // TODO: Standardise media queries.
    // TODO: Improve application of grid columns and dividers per media query.
    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2, minmax(100px, 1fr));

      ${ProductCardLink} {
        position: relative;

        &:not(:nth-of-type(2n + 2)):not(:last-of-type) {
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

    @media (min-width: 1024px) and (max-width: 1199px) {
      grid-template-columns: repeat(3, minmax(100px, 1fr));

      ${ProductCardLink} {
        position: relative;

        &:not(:nth-of-type(3n + 3)):not(:last-of-type) {
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

    @media (min-width: 1200px) and (max-width: 1399px) {
      grid-template-columns: repeat(3, minmax(100px, 1fr));

      ${ProductCardLink} {
        position: relative;

        &:not(:nth-of-type(3n + 3)):not(:last-of-type) {
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

    @media (min-width: 1400px) {
      grid-template-columns: repeat(5, minmax(100px, 1fr));

      ${ProductCardLink} {
        position: relative;

        &:not(:nth-of-type(5n + 5)):not(:last-of-type) {
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
  }
`;
