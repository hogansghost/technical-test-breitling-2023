import { Text } from '@/components/core/Text/Text';
import Image from 'next/image';
import WarrantyCareImage from '../../../../public/media/warranty-care.jpg';
import * as Styled from './HeroDetails.styles';

export const HeroDetails: React.FC = () => (
  <Styled.HeroDetails>
    <Styled.HeroDetailsHeader>
      <h2>Key Features</h2>
    </Styled.HeroDetailsHeader>

    <Styled.HeroDetailsImageWrapper>
      <Image fill sizes="" src={WarrantyCareImage} alt="" />
    </Styled.HeroDetailsImageWrapper>

    <Styled.HeroDetailsBody>
      <Text preserveWhitespace>
        {`I'm baby thundercats neutra williamsburg hot chicken cliche, vaporware bodega boys pitchfork. Distillery squid roof party bitters mukbang. Williamsburg mustache coloring book tilde keffiyeh narwhal hot chicken kombucha cray bruh. Ramps tumeric bodega boys, hexagon seitan street art bespoke. Affogato gluten-free distillery jean shorts, activated charcoal vinyl bespoke. Neutra brunch food truck chartreuse kickstarter. Tofu activated charcoal selfies, YOLO JOMO kogi health goth.\n\nPut a bird on it brunch raw denim intelligentsia chicharrones. Meh hexagon bushwick, mumblecore leggings shoreditch DIY 90's. Readymade same snackwave kitsch four loko synth, iceland chillwave copper mug raclette lyft ennui. Slow-carb gatekeep lo-fi DSA 90's shoreditch heirloom, scenester stumptown narwhal. 3 wolf moon adaptogen schlitz vaporware hoodie pug.`}
      </Text>
    </Styled.HeroDetailsBody>
  </Styled.HeroDetails>
);
