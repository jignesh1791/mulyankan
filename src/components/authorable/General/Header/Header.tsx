import { ChakravyuhComponents } from '.generated/models/Feature.ChakravyuhFeature.model';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { usePathname } from 'next/navigation';
// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.

export type HeaderProps = ChakravyuhComponents.Header.Fields.HeaderComponent & {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: ChakravyuhComponents.Header.Fields.HeaderComponent;
};

const Header = ({ fields }: HeaderProps): JSX.Element => {
  const pagename = usePathname();
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;
  const HeaderLinks = fields.HeaderNavigationLinks;
  console.log(HeaderLinks, 'Header');
  return (
    <div className="bg-white shadow-2xl">
      <div className="container mx-auto px-6 h-18 uppercase">
        <nav className="flex flex-wrap items-center justify-between mx-auto p-5" role="navigation">
          <div className="flex text-2xl">
            <h1 className="text-blue-600 font-bold">
              <a href="/">
                Chakra<span className="text-black">vyuh</span>
              </a>
            </h1>
          </div>
          <div className="w-full md:block md:w-auto" id="bs-example-navbar-collapse-1">
            <ul className="flex gap-x-4">
              {HeaderLinks.map((currentitem, index) => (
                <li
                  key={index}
                  className={`hover:text-blue-600 hover:border-b-4 border-indigo-200 border-b-indigo-500 ${
                    pagename == currentitem.fields.LinkField.value.href &&
                    'text-blue-600 border-b-4'
                  }`}
                  id={currentitem.id}
                >
                  <Link field={currentitem.fields.LinkField} />
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
