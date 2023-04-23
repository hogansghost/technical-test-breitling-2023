import { NavigationMain } from '../NavigationMain/NavigationMain';
import { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <div>lol</div>
    <NavigationMain />
    <div>{children}</div>
  </div>
);
