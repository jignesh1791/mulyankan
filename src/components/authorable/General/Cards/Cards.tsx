// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ChakravyuhComponents } from '.generated/models/Feature.ChakravyuhFeature.model';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import Image from 'next/image';

export type cardProps = ChakravyuhComponents.Cards.Fields.CarouselCard & {
  uid: string;
  componentName: string;
  dataSource: string;
  params: { [key: string]: string };
  fields: {
    items: ChakravyuhComponents.Cards.Fields.CarouselCard[];
  };
};

const Cards = ({ fields }: cardProps): JSX.Element => {
  console.log('@fields', fields);
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="container mx-auto mt-4 mb-4"
      data-component="authorable/general/Cards"
      data-testid="Cards"
    >
      <h2 className="font-bold text-5xl mb-10 ">Players</h2>
      {/* <div className="flex flex-wrap gap-y-5">
        {fields.items.map((item) => {
          return (
            <div className="flex w-[33%] flex-col items-center gap-y-2">              
              {item?.fields?.PageImage.value?.src && <Image src={item.fields.PageImage.value?.src} width={250} height={250} alt=''/>}
              <div className='text-center'>
              <RichTextA11yWrapper data-testid="Cards" field={item.fields?.SubText} editable />
              {item?.fields?.CTA?.value?.href && <Link field={item.fields.CTA}/>}
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="grid grid-cols-12 gap-5">
        {fields.items.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center shadow-lg col-span-4">
              {item?.fields?.PageImage.value?.src && (
                <Image src={item.fields.PageImage.value?.src} width={250} height={250} alt="" />
              )}
              <div className="text-center pt-2 pb-2">
                {/* <Text fields={item.fields?.PageTitle} tag='span'/> */}
                <h3 className="font-semibold">{item.fields?.PageTitle.value}</h3>
                <RichTextA11yWrapper data-testid="Cards" field={item.fields?.SubText} editable />
                {item?.fields?.CTA?.value?.href && (
                  <Link className="text-blue-500 hover:text-red-700" field={item.fields.CTA} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
