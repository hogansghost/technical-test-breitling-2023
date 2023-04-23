import { NavigationMain } from '../NavigationMain/NavigationMain';
import { NotificationBanner } from '../NotificationBanner/NotificationBanner';
import { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <NotificationBanner message="Complimentary express delivery and returns on all orders" onClose={() => {}} />

    <NavigationMain />

    <div>{children}</div>
  </div>
);
