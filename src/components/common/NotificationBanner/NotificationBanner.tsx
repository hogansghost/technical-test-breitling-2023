import * as Styled from './styles';

export const NotificationBanner: React.FC<{ message: string | React.ReactNode; onClose: () => void }> = ({
  message,
  onClose,
}) => (
  <Styled.NotificationBanner>
    <p>{message}</p>

    <button>X</button>
  </Styled.NotificationBanner>
);
