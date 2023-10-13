import type { Meta, StoryObj } from '@storybook/react';

import carList from '.';
import { mockCars } from './mocks';

const meta: Meta<typeof carList> = {
  component: carList,
};

export default meta;
type Story = StoryObj<typeof carList>;

export const Default: Story = {
  args: {
    cars: mockCars,
  },
};
