import { GetProductsQuery } from '@/queries/getProducts/getProducts.generated';
import { ProductCard } from '../../ProductCard/ProductCard';
import * as Styled from './WatchCard.styles';

// TODO: types and prop names for "as" shared between libs.
// TODO: Make Fragment for the product list query.
export type ProductCardProps = Pick<
  NonNullable<GetProductsQuery['products']>['edges'][0]['node'],
  'id' | 'name' | 'thumbnail' | 'pricing'
> & {
  url: string;
};

export const WatchCard: React.FC<ProductCardProps> = ({ url, thumbnail, id, name, pricing, ...rest }) => (
  <ProductCard {...rest} href={url}>
    <ProductCard.Image>
      <Styled.Image src={thumbnail?.url ?? 'fallback-image.jpg'} alt={thumbnail?.alt ?? ''} fill />
    </ProductCard.Image>

    <ProductCard.Body>
      <Styled.WatchIdText size="small">{id}</Styled.WatchIdText>

      <Styled.WatchNameText>{name}</Styled.WatchNameText>

      <p style={{ wordWrap: 'break-word' }}>
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: pricing?.priceRange?.start?.gross?.currency ?? 'USD',
        }).format(pricing?.priceRange?.start?.gross?.amount ?? 0)}
      </p>
    </ProductCard.Body>
  </ProductCard>
);
