import { ChakravyuhComponents } from '.generated/models/Feature.ChakravyuhFeature.model';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type CarouselProps = ChakravyuhComponents.Fields.Carousel & {
  fields: ChakravyuhComponents.Fields.Carousel;
};

type Card = ChakravyuhComponents.Cards.Fields.CarouselCard;

const Carousel = ({ fields }: CarouselProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  return (
    <div className="container mx-auto mb-8 md:mb-24">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        slidesPerView={3}
      >
        {fields.SliderCards.map((card: Card, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex item-center justify-center">
                {card?.fields?.CTA?.value?.href && card?.fields?.PageImage?.value?.src && (
                  <Link field={card.fields.CTA}>
                    <Image
                      src={card.fields.PageImage.value.src}
                      width={200}
                      height={200}
                      alt="image"
                    />
                  </Link>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CarouselProps>(Carousel);
export default Carousel;
