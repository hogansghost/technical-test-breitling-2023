import { LinkProps } from 'next/link';
import * as Styled from './ButtonLink.styles';

export const ButtonLink: React.FC<Omit<LinkProps, 'as'> & { className?: string; children: React.ReactNode }> = ({
  children,
  ...props
}) => <Styled.ButtonLink {...props}>{children}</Styled.ButtonLink>;
