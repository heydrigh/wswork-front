import type { Meta, StoryObj } from '@storybook/react';

import CardSkeleton from '.';

const meta: Meta<typeof CardSkeleton> = {
  component: CardSkeleton,
};

export default meta;
type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {};
