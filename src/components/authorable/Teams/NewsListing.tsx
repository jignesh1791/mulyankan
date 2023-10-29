import React from 'react';
import ContainerWrapper from '@/components/helpers/ContainerWrapper/ContainerWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import DateFormatter from '@/components/helpers/DateFormatter/DateFormatter';
import Image from 'next/image';
import { RootObjectProps } from './NewsListing.interface';

export default function NewsListing(props: RootObjectProps) {
  console.log('newslisting', props);
  const propData = props?.fields?.data?.datasource;
  return (
    <ContainerWrapper data={props} className="my-8 md:my-24">
      <div className="flex flex-row justify-start border-4 rounded-md mx-12 md:mx-40">
        <div className="flex flex-col items-start justify-center border-b-2 px-12 gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-700">{propData?.title?.value}</h2>
          </div>
          {/* news start */}
          {propData?.addNewsItems?.jsonValue.map((_dT: any, idx: number) => (
            <Link
              field={{
                href: `${_dT?.url}`,
              }}
              className="flex flex-row gap-6 w-full my-2"
              key={idx}
            >
              <div className="">
                {/* <Image field={_dT?.fields?.newsImage?.value} /> */}
                <Image
                  className="rounded"
                  alt={_dT?.fields?.newsImage?.value?.alt}
                  src={_dT?.fields?.newsImage?.value?.src}
                  width={_dT?.fields?.newsImage?.value?.width}
                  height={_dT?.fields?.newsImage?.value?.height}
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold">{_dT?.fields?.newsTitle?.value}</h4>
                <div>
                  <RichTextA11yWrapper field={{ value: _dT?.fields?.newsSubject?.value }} />
                </div>
                <DateFormatter dateString={_dT?.fields?.PublishingDate?.value} />
              </div>
              <div className="bg-black"></div>
            </Link>
          ))}
          {/* news finish */}
        </div>
      </div>
    </ContainerWrapper>
  );
}
