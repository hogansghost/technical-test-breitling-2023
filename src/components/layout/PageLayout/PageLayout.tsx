import * as Styled from './PageLayout.styles';
import { PageLayoutProps } from './PageLayout.types';

export const PageLayoutWrapper: React.FC<PageLayoutProps> = ({ children, className, ...rest }) => (
  <Styled.PageLayout className={className} {...rest}>
    {children}
  </Styled.PageLayout>
);

export const PageLayoutDivider: React.FC<{ className?: string }> = ({ className }) => (
  <Styled.PageLayoutDivider className={className} />
);

export const PageLayoutSection: React.FC<PageLayoutProps> = ({ className, children, fullWidth, ...rest }) => (
  <Styled.PageLayoutSection $fullWidth={fullWidth} className={className} {...rest}>
    {children}
  </Styled.PageLayoutSection>
);

export const PageLayout = Object.assign(PageLayoutWrapper, {
  Divider: PageLayoutDivider,
  Section: PageLayoutSection,
});
