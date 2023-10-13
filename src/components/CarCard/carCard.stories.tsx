import type { Meta, StoryObj } from '@storybook/react';

import CarCard from '.';
import { carMock } from './mocks';

const meta: Meta<typeof CarCard> = {
  component: CarCard,
};

export default meta;
type Story = StoryObj<typeof CarCard>;

export const Default: Story = {
  args: {
    car: carMock,
  },
};
