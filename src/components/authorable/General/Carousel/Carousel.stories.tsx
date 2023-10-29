// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from 'lib/object-parser';

// Local
import Carousel, { CarouselProps } from './Carousel';
import defaultData from './Carousel.mock-data';

const meta: Meta<typeof Carousel> = {
  title: 'Authorable/General/Carousel',
  component: Carousel,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: (args) => {
    return <Carousel {...(expandObj({ ...args }) as CarouselProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};
