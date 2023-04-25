import { Link } from '@/components/core/Link/Link';
import * as Styled from './Footer.styles';

// TODO: Improve this, name, location, everything.
export const Footer = () => (
  <Styled.Footer>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/watches">Watches</Link>
      </li>
    </ul>
  </Styled.Footer>
);
