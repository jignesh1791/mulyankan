// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Footer from './Footer';
import defaultData, { noData } from './Footer.mock-data';

it('renders correctly', () => {
  const component = snapshot(Footer, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Footer');
});

it('does not render without data', () => {
  const component = renderComponent(Footer, { componentProps: noData });
  const text = component.queryByTestId('Footer');
  expect(text).toBe(null);
});
