import { forwardRef, Ref } from 'react';
import * as Styled from './LoadingSpinner.styles';
import { LoadingSpinnerProps } from './LoadingSpinner.types';

export const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ size = 'medium', ...props }, ref?: Ref<HTMLDivElement>) => {
    // Spread after the aria-label so that we can override it if need be.
    return <Styled.LoadingSpinner aria-label="Loading" {...props} ref={ref} $size={size} role="progressbar" />;
  }
);
