import * as Styled from './CardGrid.styles';
import { CardGridProps } from './CardGrid.types';

export const CardGrid: React.FC<CardGridProps> = ({ children, className, ...rest }) => (
  <Styled.CardGrid className={className} {...rest}>
    {children}
  </Styled.CardGrid>
);
