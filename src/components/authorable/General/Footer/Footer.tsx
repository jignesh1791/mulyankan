// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ChakravyuhComponents } from '.generated/models/Feature.ChakravyuhFeature.model';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { composeStories } from '@storybook/react';
// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type FooterProps = ChakravyuhComponents.Footer.Fields.FooterComponent & {
  fields: ChakravyuhComponents.Footer.Fields.FooterComponent;
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="bg-blue-600 shadow-2xl">
      <div className="container mx-auto px-6 items-center  mx-auto p-5  ">
        <div className="flex justify-between">
          <div className=" text-2xl uppercase">
            <h1 className="text-white font-bold">
              <a href="/">
                Chakra<span className="text-black">vyuh</span>
              </a>
            </h1>
          </div>
          <div className="w-full md:block md:w-auto text-white" id="bs-example-navbar-collapse-1">
            <h3 className="uppercase font-bold">Navigations</h3>
            <ul className="gap-x-4">
              {fields.FooterNavigationLink.map((currentitem: any) => (
                <li id={currentitem.id}>
                  <Link field={currentitem.fields.LinkField} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white  border-t border-white">
        <div className="container px-6 items-center  mx-auto p-5 ">
          {fields.CopyrightText.value}
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<FooterProps>(Footer);
export default Footer;
