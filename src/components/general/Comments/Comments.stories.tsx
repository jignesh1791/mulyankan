// Global
import { Story, Meta } from '@storybook/react';
// Local
import Comments, { CommentsProps } from './Comments';
import defaultData from './Comments.mock-data';

export default {
  title: 'General/Comments',
  component: Comments,
} as Meta;
const Template: Story<CommentsProps> = (props) => <Comments {...props} />;
export const Default = Template.bind({});
Default.args = defaultData;
