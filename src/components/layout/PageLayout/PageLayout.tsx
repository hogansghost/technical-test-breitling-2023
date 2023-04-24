import * as Styled from './PageLayout.styles';
import { PageLayoutProps } from './PageLayout.types';

export const PageLayoutWrapper: React.FC<PageLayoutProps> = ({ children, className, ...rest }) => (
  <Styled.PageLayout className={className} {...rest}>
    {children}
  </Styled.PageLayout>
);

export const PageLayoutSection: React.FC<PageLayoutProps> = ({ className, children, ...rest }) => (
  <Styled.PageLayoutSection className={className} {...rest}>
    {children}
  </Styled.PageLayoutSection>
);

export const PageLayout = Object.assign(PageLayoutWrapper, {
  Section: PageLayoutSection,
});
