import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

// TODO: types and prop names for "as" shared between libs.
export type ProductCardProps = Omit<LinkProps, 'as'> & {
  className?: string;
  children: React.ReactNode;
};

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ProductCard: React.FC<ProductCardProps> = ({ className, children, ...rest }) => (
  <StyledLink className={className} {...rest}>
    {children}
  </StyledLink>
);
