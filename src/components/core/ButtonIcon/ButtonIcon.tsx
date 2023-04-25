import * as Styled from './ButtonIcon.styles';

export const ButtonIcon: React.FC<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> & {
    className?: string;
    'aria-label': string;
    children: React.ReactNode;
  }
> = ({ children, ...props }) => (
  <Styled.ButtonIcon type="button" {...props}>
    {children}
  </Styled.ButtonIcon>
);
