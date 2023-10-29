// Global
import { Story, Meta } from '@storybook/react';
// Local
import Component, { ComponentWrapperProps } from './Component';
import defaultData from './Component.mock-data';

export default {
  title: 'Helpers/Component',
  component: Component,
} as Meta;
const Template: Story<ComponentWrapperProps> = (props) => <Component {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
