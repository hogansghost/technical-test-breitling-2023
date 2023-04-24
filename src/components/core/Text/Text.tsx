import { forwardRef } from 'react';

import { StyledText } from './Text.styles';
import type { TextProps } from './Text.types';

// Export styled component for nested styling.
// ts-unused-exports:disable-next-line
export const TextStyled = StyledText;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ preserveWhitespace = false, size = 'medium', weight = 'regular', ...rest }, ref) => (
    <StyledText {...rest} ref={ref} $preserveWhitespace={preserveWhitespace} $size={size} $weight={weight} />
  )
);
