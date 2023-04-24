import { NavigationMain } from '../../common/NavigationMain/NavigationMain';
import { NotificationBanner } from '../../common/NotificationBanner/NotificationBanner';
import { LayoutProps } from './AppLayout.types';

export const AppLayout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <NotificationBanner
      message="Complimentary express delivery and returns on all orders"
      onClose={() => {
        console.log('close');
      }}
    />

    <NavigationMain />

    <div>{children}</div>
  </div>
);
