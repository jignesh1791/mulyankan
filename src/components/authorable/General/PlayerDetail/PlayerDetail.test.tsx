// Lib
import { renderComponent } from 'lib/testing/utils';

// Local
import PlayerDetail from './PlayerDetail';
import { noData } from './PlayerDetail.mock-data';

it('does not render without data', () => {
  const component = renderComponent(PlayerDetail, { componentProps: noData });
  const text = component.queryByTestId('PlayerDetail');
  expect(text).toBe(null);
});
