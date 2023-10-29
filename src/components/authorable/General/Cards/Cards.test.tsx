// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Cards from './Cards';
import defaultData, { noData } from './Cards.mock-data';

it('renders correctly', () => {
  const component = snapshot(Cards, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Cards');
});

it('does not render without data', () => {
  const component = renderComponent(Cards, { componentProps: noData });
  const text = component.queryByTestId('Cards');
  expect(text).toBe(null);
});
