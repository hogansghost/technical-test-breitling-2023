import { Link } from '@/components/core/Link/Link';
import { LinkIcon } from '@/components/core/LinkIcon/LinkIcon';
import { AccountIcon } from '@/components/core/icons/AccountIcon';
import { BasketIcon } from '@/components/core/icons/BasketIcon';
import { FavouritesIcon } from '@/components/core/icons/FavouritesIcon';
import { PhoneIcon } from '@/components/core/icons/PhoneIcon';
import { SearchIcon } from '@/components/core/icons/SearchIcon';
import { BreitlingLogo } from '@/components/logos/BreitlingLogo';

import styled, { css } from 'styled-components';

export const HomeLink = styled(Link)`
  width: 120px;
`;

export const PageLink = styled(Link)`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
`;

export const Navigation = styled.nav`
  padding-block: 16px;
  padding-inline: 32px;
  border-block-end: 1px solid #efefef;
`;

export const NavigationBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: auto;
    width: ${theme.dimensions.content.large};
    max-width: 100%;
  `}
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
`;

export const NavigationMain = () => (
  <Navigation>
    <NavigationBody>
      <HomeLink href="/">
        <BreitlingLogo />
      </HomeLink>

      <List>
        <li>
          <PageLink href="/watches">Watches</PageLink>
        </li>
        <li>
          <PageLink href="/">Straps</PageLink>
        </li>
        <li>
          <PageLink href="/">Care</PageLink>
        </li>
        <li>
          <PageLink href="/">Subscription</PageLink>
        </li>
        <li>
          <PageLink href="/">Service</PageLink>
        </li>
        <li>
          <PageLink href="/">Stores</PageLink>
        </li>
        <li>
          <PageLink href="/">About</PageLink>
        </li>
      </List>

      <List>
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
      </List>
    </NavigationBody>
  </Navigation>
);
