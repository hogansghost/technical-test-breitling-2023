import { LayoutProps } from './types';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <div>lol</div>
    <div>{children}</div>
  </div>
);
