import * as Styled from './Button.styles';

export const Button: React.FC<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> & {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
  }
> = ({ children, ...props }) => (
  <Styled.Button type="button" {...props}>
    {children}
  </Styled.Button>
);
