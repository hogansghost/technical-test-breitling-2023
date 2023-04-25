import * as Styled from './FilterBar.styles';
import { FilterBarProps } from './FilterBar.types';

export const FilterBarWrapper: React.FC<FilterBarProps> = ({ children, className, ...rest }) => (
  <Styled.FilterBar className={className} {...rest}>
    <Styled.FilterBarBody>{children}</Styled.FilterBarBody>
  </Styled.FilterBar>
);

export const FilterBarSection: React.FC<FilterBarProps> = ({ className, children, canExpand, ...rest }) => (
  <Styled.FilterBarSection $canExpand={canExpand} className={className} {...rest}>
    {children}
  </Styled.FilterBarSection>
);

export const FilterBar = Object.assign(FilterBarWrapper, {
  PrimaryActions: (props: FilterBarProps) => <FilterBarSection canExpand {...props} />,
  SecondaryActions: FilterBarSection,
});
