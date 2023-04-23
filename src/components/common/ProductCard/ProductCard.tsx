import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

// TODO: types and prop names for "as" shared between libs.
export type ProductCardProps = Omit<LinkProps, 'as'> & {
  className?: string;
  children: React.ReactNode;
};

export const StyledProductCardLink = styled(Link)`
  text-decoration: none;
  display: grid;
  gap: 32px;
  grid-template-columns: minmax(0, 1fr);
  padding: 16px;
  text-align: center;
  transition: background-color 200ms;

  &:focus-within {
    outline: 0;
  }

  &:focus-within,
  &:hover {
    background-color: #fafafa;
  }
`;

export const StyledProductCardImage = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
`;

const ProductCardImage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledProductCardImage>{children}</StyledProductCardImage>
);

const ProductCardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

export const ProductCardWrapper: React.FC<ProductCardProps> = ({ className, children, ...rest }) => (
  <StyledProductCardLink className={className} {...rest}>
    {children}
  </StyledProductCardLink>
);

export const ProductCard = Object.assign(ProductCardWrapper, {
  Image: ProductCardImage,
  Body: ProductCardBody,
});
