import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { memo, useEffect, useRef, useState } from 'react';
import * as Styled from './LoadingOverlay.styles';
import { LoadingOverlayProps } from './LoadingOverlay.types';

// Don't show loading spinner if the loading duration is lower than an imperceptable duration
export const DEFAULT_SHOW_LOADING_OFFSET = 200;

export const LoadingOverlay = memo(
  ({ children, isLoading, showSpinnerThresholdMS = DEFAULT_SHOW_LOADING_OFFSET }: LoadingOverlayProps) => {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    const loadingTimer = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
      // We want to set the ref for the timeout so we can cancel over renders.
      if (isLoading) {
        loadingTimer.current = setTimeout(() => setShowLoadingSpinner(true), showSpinnerThresholdMS);
      }

      return () => {
        clearTimeout(loadingTimer.current);

        setShowLoadingSpinner(false);
      };
    }, [isLoading, showSpinnerThresholdMS]);

    return (
      <Styled.LoadingOverlay>
        <Styled.LoadingOverlayContent $isLoading={showLoadingSpinner} aria-busy={showLoadingSpinner}>
          {children}
        </Styled.LoadingOverlayContent>

        {showLoadingSpinner && (
          <Styled.LoadingOverlaySpinner>
            <LoadingSpinner size="large" />
          </Styled.LoadingOverlaySpinner>
        )}
      </Styled.LoadingOverlay>
    );
  }
);
