// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { composeStories } from '@storybook/react';
// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type HeaderProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: any;
};

const Header = ({ fields }: HeaderProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  var HeaderLinks = fields.HeaderNavigationLinks;
  console.log(HeaderLinks, 'Header');
  return (
    <div className="bg-white shadow-2xl">
      <div className="container mx-auto px-6 h-18 uppercase">
        <nav className="flex flex-wrap items-center justify-between mx-auto p-5" role="navigation">
          <div className="flex text-2xl">
            <h1 className="text-blue-600 font-bold">
              <a href="/">
                Chakra<span className='text-black'>vyuh</span>
              </a>
            </h1>
          </div>
          <div className="w-full md:block md:w-auto" id="bs-example-navbar-collapse-1">
            <ul className="flex gap-x-4">
              {HeaderLinks.map((currentitem: any) => (
                <li className='hover:text-blue-600 hover:border-b-4 border-indigo-200 border-b-indigo-500' id={currentitem.id}>
                  <a href={currentitem.fields.LinkField.value.href}>
                    {currentitem.fields.LinkField.value.anchor}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
      
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<HeaderProps>(Header);
export default Header;
