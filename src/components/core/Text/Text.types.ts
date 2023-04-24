import type { font } from '@/styles/theme';

export type TextSizes = keyof typeof font.size.body;

export type TextWeights = keyof typeof font.weight;

export type TextProps = React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> & {
  children: React.ReactNode;
  size?: TextSizes;
  weight?: TextWeights;
  preserveWhitespace?: boolean;
};
