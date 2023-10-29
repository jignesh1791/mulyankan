// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Carousel from './Carousel';
import defaultData, { noData } from './Carousel.mock-data';

it('renders correctly', () => {
  const component = snapshot(Carousel, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Carousel');
});

it('does not render without data', () => {
  const component = renderComponent(Carousel, { componentProps: noData });
  const text = component.queryByTestId('Carousel');
  expect(text).toBe(null);
});
