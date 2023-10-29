// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { ChakravyuhComponents } from '.generated/models/Feature.ChakravyuhFeature.model';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type FooterProps = ChakravyuhComponents.Footer.Fields.FooterComponent & {
  fields: ChakravyuhComponents.Footer.Fields.FooterComponent;
};

const Footer = ({ fields }: FooterProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="bg-[#1c305c] shadow-2xl py-10">
      <div className="container mx-auto px-6 items-center  mx-auto p-5  ">
        <div className="flex flex-wrap gap-y-5 justify-between">
          <div className=" text-2xl uppercase">
            <h1 className="text-white font-bold">
              <a href="/">
                Chakra<span className="font-black text-3xl">vyuh</span>
              </a>
            </h1>
          </div>
          <div className="w-full md:block md:w-auto text-white" id="bs-example-navbar-collapse-1">
            <h3 className="uppercase font-bold">Navigations</h3>
            <ul className="gap-x-4 p-3">
              {fields.FooterNavigationLink.map((currentitem: any, index) => (
                <li key={index} id={currentitem.id}>
                  <Link field={currentitem.fields.LinkField} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white  border-t-4 border-white">
        <div className="container px-6 items-center  mx-auto pt-5 ">
          {fields.CopyrightText.value}
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<FooterProps>(Footer);
export default Footer;
