// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj } from 'lib/object-parser';

// Local
import PlayerDetail, { PlayerDetailProps } from './PlayerDetail';

const meta: Meta<typeof PlayerDetail> = {
  title: 'Authorable/General/PlayerDetail',
  component: PlayerDetail,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PlayerDetail>;

export const Default: Story = {
  render: (args) => {
    return <PlayerDetail {...(expandObj({ ...args }) as PlayerDetailProps)} />;
  }
};
