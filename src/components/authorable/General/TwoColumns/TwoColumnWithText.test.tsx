// // Lib
// import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// // Local
// import TwoColumnWithText from './TwoColumnWithText';
// import defaultData, { noData } from './TwoColumnWithText.mock-data';

// it('renders correctly', () => {
//   const component = snapshot(TwoColumnWithText, { componentProps: defaultData });
//   hasDataComponent(component, 'authorable/general/twocolumnwithtext');
// });

// it('does not render without data', () => {
//   const component = renderComponent(TwoColumnWithText, { componentProps: noData });
//   const text = component.queryByTestId('contentblock');
//   expect(text).toBe(null);
// });
