// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj } from 'lib/object-parser';

// Local
import Cards, { cardProps } from './Cards';

const meta: Meta<typeof Cards> = {
  title: 'Authorable/General/Cards',
  component: Cards,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  render: (args) => {
    return <Cards {...(expandObj({ ...args }) as cardProps)} />;
  },
};
