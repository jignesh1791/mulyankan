import React, { useState } from 'react';
import Image from 'next/image';
import RichTextA11yWrapper from '../../../helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Placeholder from '../../../../assets/placeholder-image.png';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import ContainerWrapper from '@/components/helpers/ContainerWrapper/ContainerWrapper';
import { RootObjectProps } from './TwoColumn.interface';

//interface

export default function TwoColumnWithText(props: RootObjectProps) {
  const data = props?.fields?.data?.datasource?.fields;
  const paramData = props?.params;
  const [isRevert] = useState<Boolean>(paramData?.revertColumns === '1');
  const richTextValue = data[2]?.jsonValue?.value;
  const headingValue = data[4]?.jsonValue?.value;
  console.log('2 columns', props);
  return (
    <ContainerWrapper data={data} className="my-8 md:my-12">
      <div className="flex justify-center items-center my-6 md:my-12">
        <h2 className="text-3xl text-center md:text-5xl text-[#100011]">{headingValue}</h2>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-6 md:gap-12 ${
          isRevert ? `md:flex-row-reverse` : `md:flex-row`
        }`}
      >
        <div className="">
          <Image height="400" width="300" src={Placeholder} alt={data[3]?.jsonValue?.value?.alt} />
        </div>
        <div
          className={`flex flex-col gap-4 justify-center items-center ${
            isRevert ? `md:items-end` : `md:items-start`
          }`}
        >
          <div className="font-semibold text-xl md:text-4xl text-center">
            <h3 className={`text-center ${isRevert ? `md:text-right` : `md:text-left`}`}>
              {data[1]?.jsonValue?.value}
            </h3>
          </div>
          <div className="mx-4 md:mx-0">
            <div
              className={`text-[#100011] text-center ${
                isRevert ? `md:text-right` : `md:text-left`
              }`}
            >
              <RichTextA11yWrapper editable field={{ value: richTextValue }} />
            </div>
          </div>
          <div>
            <Link
              className={`${data[0]?.jsonValue?.value?.class} `}
              field={{
                text: data[0]?.jsonValue?.value?.text,
                href: data[0]?.jsonValue?.value?.href,
                linktype: data[0]?.jsonValue?.value?.linktype,
              }}
            />
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
