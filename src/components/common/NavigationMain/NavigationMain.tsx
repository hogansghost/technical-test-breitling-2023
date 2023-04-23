import Link from 'next/link';
import styled from 'styled-components';

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
    <Link href="/">Home</Link>
    <List>
      <li>
        <Link href="/">Watches</Link>
      </li>
      <li>
        <Link href="/">Straps</Link>
      </li>
      <li>
        <Link href="/">Care</Link>
      </li>
      <li>
        <Link href="/">Subscription</Link>
      </li>
      <li>
        <Link href="/">Service</Link>
      </li>
      <li>
        <Link href="/">Stores</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
    </List>

    <List>
      <li>
        <Link href="/">🫥</Link>
      </li>
      <li>
        <Link href="/">🫥</Link>
      </li>
      <li>
        <Link href="/">🫥</Link>
      </li>
      <li>
        <Link href="/">🫥</Link>
      </li>
      <li>
        <Link href="/">🫥</Link>
      </li>
    </List>
  </Navigation>
);
