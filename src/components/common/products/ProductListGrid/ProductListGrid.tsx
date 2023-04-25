import { Button } from '@/components/core/Button/Button';
import { GetProductsQuery } from '@/queries/getProducts/getProducts.generated';
import { WatchCard } from '../WatchCard/WatchCard';
import * as Styled from './ProductListGrid.styles';

export type ProductListGridProps = {
  products: NonNullable<GetProductsQuery['products']>['edges'];
  hasNextPage: boolean;
  isFetching: boolean;
  onLoadNextPage: () => void;
};

// TODO: Layout component to genericise this (loading button, etc.)
export const ProductListGrid: React.FC<ProductListGridProps> = ({
  products,
  hasNextPage,
  isFetching,
  onLoadNextPage,
  ...rest
}) => (
  <Styled.ProductList {...rest}>
    <Styled.ProductListGrid>
      {products.map(({ node: product }) => (
        <WatchCard
          key={product.id}
          id={product.id}
          url={`/watches/${product.id}-${product.slug}`}
          thumbnail={product?.thumbnail}
          name={product?.name}
          pricing={product?.pricing}
        />
      ))}
    </Styled.ProductListGrid>

    {hasNextPage && (
      <Styled.ProductListGridFooter>
        <Button disabled={isFetching} onClick={onLoadNextPage}>
          Load more
        </Button>
      </Styled.ProductListGridFooter>
    )}
  </Styled.ProductList>
);
