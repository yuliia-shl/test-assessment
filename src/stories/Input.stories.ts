import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Input from '../components/Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClear: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    inputType: 'text',
    placeholder: 'Email',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    inputType: 'password',
    placeholder: 'Password',
    clearable: false,
  },
};

export const Age: Story = {
  args: {
    inputType: 'number',
    placeholder: 'Age',
    clearable: true,
  },
};
