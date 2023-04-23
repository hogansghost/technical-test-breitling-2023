import { GetProductsQuery } from '@/queries/getProducts/getProducts.generated';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import { ProductCard } from '../../ProductCard/ProductCard';

// TODO: types and prop names for "as" shared between libs.
export type ProductCardProps = Omit<LinkProps, 'as'> &
  Pick<NonNullable<GetProductsQuery['products']>['edges'][0]['node'], 'id' | 'name' | 'thumbnail' | 'pricing'> & {
    url: string;
    onAddToBasket: () => void;
  };

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const WatchStrapCard: React.FC<ProductCardProps> = ({
  url,
  thumbnail,
  id,
  name,
  pricing,
  onAddToBasket,
  ...rest
}) => (
  <ProductCard {...rest} href={url}>
    <ProductCard.Image>
      <Image src={thumbnail?.url ?? 'fallback-image.jpg'} alt="" fill />
    </ProductCard.Image>

    <ProductCard.Body>
      <p style={{ wordWrap: 'break-word' }}>{id}</p>

      <p>{name}</p>

      <p style={{ wordWrap: 'break-word' }}>
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: pricing?.priceRange?.start?.gross?.currency ?? 'USD',
        }).format(pricing?.priceRange?.start?.gross?.amount ?? 0)}
      </p>

      <button onClick={onAddToBasket}>Add to Basket</button>
    </ProductCard.Body>
  </ProductCard>
);
