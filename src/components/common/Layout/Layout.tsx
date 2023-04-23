import { LayoutProps } from './types';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);
