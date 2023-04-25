import { ButtonLink } from '@/components/core/ButtonLink/ButtonLink';
import * as Styled from './HeroCarousel.styles';

export const HeroCarousel: React.FC = () => (
  <Styled.HeroCarousel>
    <Styled.Background fill sizes="" src="/media/banner-001.jpg" alt="" />

    <Styled.HeroCarouselBody>
      <div>
        <h1>Top time classic cars</h1>
        <ButtonLink href="watches">Discover</ButtonLink>
      </div>
    </Styled.HeroCarouselBody>
  </Styled.HeroCarousel>
);
