import { BreitlingLogo } from '@/components/logos/BreitlingLogo';
import Link from 'next/link';
import styled from 'styled-components';

export const HomeLink = styled(Link)`
  width: 120px;
`;

export const Navigation = styled.nav`
  display: flex;
  list-style: none;
  border-block-end: 1px solid grey;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavigationMain = () => (
  <Navigation>
    <HomeLink href="/">
      <BreitlingLogo />
    </HomeLink>

    <List>
      <li>
        <Link href="/watches">Watches</Link>
      </li>
      <li>
        <Link href="/watches">Straps</Link>
      </li>
      <li>
        <Link href="/watches">Care</Link>
      </li>
      <li>
        <Link href="/watches">Subscription</Link>
      </li>
      <li>
        <Link href="/watches">Service</Link>
      </li>
      <li>
        <Link href="/watches">Stores</Link>
      </li>
      <li>
        <Link href="/watches">About</Link>
      </li>
    </List>

    <List>
      <li>
        <Link href="/watches">🫥</Link>
      </li>
      <li>
        <Link href="/watches">🫥</Link>
      </li>
      <li>
        <Link href="/watches">🫥</Link>
      </li>
      <li>
        <Link href="/watches">🫥</Link>
      </li>
      <li>
        <Link href="/watches">🫥</Link>
      </li>
    </List>
  </Navigation>
);
