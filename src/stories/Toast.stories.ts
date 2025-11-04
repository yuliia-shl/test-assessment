import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Toast from '../components/Toast/Toast';

const meta = {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClose: fn() },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    toastType: 'success',
    message: 'Hello! This is a success toast.',
    duration: 4000,
  },
};

export const Error: Story = {
  args: {
    toastType: 'error',
    message: 'Hello! This is an error toast.',
    duration: 3000,
  },
};

export const Normal: Story = {
  args: {
    toastType: 'normal',
    duration: 2000,
    message: 'Hello! This is a toast.',
    closeBtn: false,
  },
};
