import { Link } from '@/components/core/Link/Link.styles';
import styled from 'styled-components';

export const Footer = styled.footer`
  color: white;
  background: black;
  padding: 64px;

  && {
    ${Link} {
      color: inherit;
    }
  }
`;
