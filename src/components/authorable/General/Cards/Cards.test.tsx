// Lib
import { renderComponent } from 'lib/testing/utils';

// Local
import Cards from './Cards';
import { noData } from './Cards.mock-data';

it('does not render without data', () => {
  const component = renderComponent(Cards, { componentProps: noData });
  const text = component.queryByTestId('Cards');
  expect(text).toBe(null);
});
