import { LinkProps } from 'next/link';
import * as Styled from './ProductCard.styles';

export const ProductCardWrapper: React.FC<ProductCardProps> = ({ className, children, ...rest }) => (
  <Styled.ProductCardLink className={className} {...rest}>
    {children}
  </Styled.ProductCardLink>
);

// TODO: types and prop names for "as" shared between libs.
export type ProductCardProps = Omit<LinkProps, 'as'> & {
  className?: string;
  children: React.ReactNode;
};

const ProductCardImage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Styled.ProductCardImage>{children}</Styled.ProductCardImage>
);

const ProductCardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

export const ProductCard = Object.assign(ProductCardWrapper, {
  Image: ProductCardImage,
  Body: ProductCardBody,
});
