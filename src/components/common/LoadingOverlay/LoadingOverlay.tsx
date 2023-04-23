import * as Styled from './LoadingOverlay.styles';
import { LoadingOverlayProps } from './LoadingOverlay.types';

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ children, isLoading, ...rest }) => (
  <Styled.LoadingOverlay $loading={isLoading} aria-busy={isLoading} {...rest}>
    {children}
  </Styled.LoadingOverlay>
);
