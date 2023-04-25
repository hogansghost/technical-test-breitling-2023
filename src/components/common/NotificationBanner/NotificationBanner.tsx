import { ButtonIcon } from '@/components/core/ButtonIcon/ButtonIcon';
import { CloseIcon } from '@/components/core/icons/CloseIcon';
import * as Styled from './NotificationBanner.styles';

export const NotificationBanner: React.FC<{ message: string | React.ReactNode; onClose: () => void }> = ({
  message,
  onClose,
}) => (
  <Styled.NotificationBanner>
    <Styled.NotificationBannerBody>
      <p>{message}</p>

      <ButtonIcon aria-label="Close banner" onClick={onClose}>
        <CloseIcon />
      </ButtonIcon>
    </Styled.NotificationBannerBody>
  </Styled.NotificationBanner>
);
