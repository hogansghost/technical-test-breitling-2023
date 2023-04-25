import { useState } from 'react';
import { NavigationMain } from '../../common/NavigationMain/NavigationMain';
import { NotificationBanner } from '../../common/NotificationBanner/NotificationBanner';
import { LayoutProps } from './AppLayout.types';

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  // TODO: Hook for checking local storage if they have dismissed a banner.
  const [showNotificationBanner, setShowNotificationBanner] = useState(true);

  return (
    <div>
      {showNotificationBanner && (
        <NotificationBanner
          message="Complimentary express delivery and returns on all orders"
          onClose={() => {
            setShowNotificationBanner(false);
          }}
        />
      )}

      <NavigationMain />

      <div>{children}</div>
    </div>
  );
};
