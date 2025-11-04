import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import SidebarMenu from '../components/Sidebar/SidebarMenu';

const meta = {
  title: 'Example/Navigation',
  component: SidebarMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClose: fn() },
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLevel: Story = {
  args: {
    items: [{ label: 'Home' }, { label: 'About' }],
    isOpen: true,
  },
};

export const TwoLevel: Story = {
  args: {
    items: [
      {
        label: 'User',
        subItems: [{ label: 'About' }, { label: 'Portfolio' }],
      },
      {
        label: 'Settings',
        subItems: [{ label: 'Profile' }, { label: 'Account' }],
      },
    ],
    isOpen: true,
  },
};
