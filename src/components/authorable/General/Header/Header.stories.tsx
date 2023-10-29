// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj } from 'lib/object-parser';

// Local
import Header, { HeaderProps } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Authorable/General/Header',
  component: Header,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => {
    return <Header {...(expandObj({ ...args }) as HeaderProps)} />;
  },
};
