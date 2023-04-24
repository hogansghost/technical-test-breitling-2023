export type LoadingSpinnerSizes = 'medium' | 'large';

export type LoadingSpinnerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
> & {
  size?: LoadingSpinnerSizes;
};
