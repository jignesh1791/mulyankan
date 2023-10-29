import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import React from 'react';
import { ChakravyuhFeature } from '.generated/models/Feature.ChakravyuhFeature.model';

export type BannerProp = ChakravyuhFeature.Fields.Banner;
export default function Banner(props: BannerProp) {
  console.log('props', props?.fields);
  const propData = props?.fields;
  const richTitleValue = propData?.Title?.value;
  const rteSubValue = propData?.Description?.value;
  const backgroundImageURL = `${propData?.PageImage?.value?.src}`;
  console.log('banner', propData?.CTA?.value);
  return (
    <section className="mb-8 md:mb-24">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[500px] md:h-[780px] "
        style={{
          backgroundPosition: '50%',
          backgroundImage: `url(${backgroundImageURL})`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <div className="mt-2 mb-8 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                <RichTextA11yWrapper editable field={{ value: richTitleValue }} />
              </div>
              <div className="mb-16 text-xl font-medium tracking-tight md:text-2xl text-gray-400">
                <RichTextA11yWrapper editable field={{ value: rteSubValue }} />
              </div>
              {propData?.CTA?.value && (
                <Link
                  className="rounded border-2 border-neutral-50 px-[46px] py-[14px] text-sm md:text-xl font-semibold uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  field={propData?.CTA}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
