import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import * as Styled from './Link.styles';

export const Link: React.FC<Omit<LinkProps, 'as'> & { className?: string; children: React.ReactNode }> = ({
  children,
  href,
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Styled.Link href={href} {...props} $isActive={isActive}>
      {children}
    </Styled.Link>
  );
};
