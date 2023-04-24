export type LoadingOverlayProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
> & {
  children: React.ReactNode;
  isLoading: boolean;
  showSpinnerThresholdMS?: number;
};
