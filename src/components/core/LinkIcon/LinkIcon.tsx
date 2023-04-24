import { LinkProps } from 'next/link';
import * as Styled from './LinkIcon.styles';

export const LinkIcon: React.FC<
  Omit<LinkProps, 'as'> & { className?: string; 'aria-label': string; children: React.ReactNode }
> = ({ children, ...props }) => <Styled.LinkIcon {...props}>{children}</Styled.LinkIcon>;
