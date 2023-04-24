import * as Styled from './NotificationBanner.styles';

export const NotificationBanner: React.FC<{ message: string | React.ReactNode; onClose: () => void }> = ({
  message,
  onClose,
}) => (
  <Styled.NotificationBanner>
    <Styled.NotificationBannerBody>
      <p>{message}</p>

      <button>X</button>
    </Styled.NotificationBannerBody>
  </Styled.NotificationBanner>
);
