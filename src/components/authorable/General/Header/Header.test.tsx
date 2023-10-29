// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Header from './Header';
import defaultData, { noData } from './Header.mock-data';

it('renders correctly', () => {
  const component = snapshot(Header, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Header');
});

it('does not render without data', () => {
  const component = renderComponent(Header, { componentProps: noData });
  const text = component.queryByTestId('Header');
  expect(text).toBe(null);
});
