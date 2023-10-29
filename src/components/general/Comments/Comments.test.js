// Global
import { hasDataComponent, snapshot } from 'lib/jest/test-utils';
// Local
import Comments from './Comments';
import defaultData from './Comments.mock-data';

it('renders correctly', () => {
  const component = snapshot(Comments, { componentProps: defaultData });
  hasDataComponent(component, 'general/comments');
});
