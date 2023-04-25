import { Link } from '@/components/core/Link/Link';
import { LinkIcon } from '@/components/core/LinkIcon/LinkIcon';
import { AccountIcon } from '@/components/core/icons/AccountIcon';
import { BasketIcon } from '@/components/core/icons/BasketIcon';
import { FavouritesIcon } from '@/components/core/icons/FavouritesIcon';
import { PhoneIcon } from '@/components/core/icons/PhoneIcon';
import { SearchIcon } from '@/components/core/icons/SearchIcon';
import { BreitlingLogo } from '@/components/logos/BreitlingLogo';

import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  padding-block: 16px;
  background: white;
  border-block-end: 1px solid #efefef;
  z-index: 11;
`;

export const NavigationBody = styled.div`
  ${({ theme }) => css`
    display: grid;
    row-gap: ${theme.spacing(1)};
    grid-template-areas:
      'logo actionNavigation'
      'pageNavigation pageNavigation';
    grid-template-columns: minmax(10px, 120px) 1fr;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
    width: ${theme.dimensions.content.large};
    max-width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: 160px minmax(0, 1fr) min-content;
      grid-template-areas: 'logo pageNavigation actionNavigation';
    }
  `}
`;

export const HomeLink = styled(Link)`
  padding-block: 16px;
  padding-inline: 32px;
  grid-area: logo;
`;

export const PageLink = styled(Link)`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  padding-inline: 32px;
`;

export const PageListWrapper = styled.div`
  flex: 1 1 auto;
  grid-area: pageNavigation;

  @media (max-width: 768px) {
    order: 3;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const PageList = styled(List)`
  gap: 32px;
`;

export const ActionList = styled(List)`
  justify-content: flex-end;
  grid-area: actionNavigation;
`;

export const NavigationMain = () => (
  <Navigation>
    <NavigationBody>
      <HomeLink href="/">
        <BreitlingLogo />
      </HomeLink>

      <PageListWrapper>
        <PageList>
          <li>
            <PageLink href="/watches">Watches</PageLink>
          </li>
          <li>
            <PageLink href="/about">Straps</PageLink>
          </li>
          <li>
            <PageLink href="/about">Care</PageLink>
          </li>
          <li>
            <PageLink href="/about">Subscription</PageLink>
          </li>
          <li>
            <PageLink href="/about">Service</PageLink>
          </li>
          <li>
            <PageLink href="/about">Stores</PageLink>
          </li>
          <li>
            <PageLink href="/about">About</PageLink>
          </li>
        </PageList>
      </PageListWrapper>

      <ActionList>
        <li>
          <LinkIcon aria-label="Search" href="/watches">
            <SearchIcon />
          </LinkIcon>
        </li>
        <li>
          <LinkIcon aria-label="Contact" href="/watches">
            <PhoneIcon />
          </LinkIcon>
        </li>
        <li>
          <LinkIcon aria-label="Favourites" href="/watches">
            <FavouritesIcon />
          </LinkIcon>
        </li>
        <li>
          <LinkIcon aria-label="Account" href="/watches">
            <AccountIcon />
          </LinkIcon>
        </li>
        <li>
          <LinkIcon aria-label="Basket" href="/watches">
            <BasketIcon />
          </LinkIcon>
        </li>
      </ActionList>
    </NavigationBody>
  </Navigation>
);
