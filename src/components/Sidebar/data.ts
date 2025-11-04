import type { SidebarItemProps } from './SidebarItem';

// Example items for sidebar
export const sidebarItems: SidebarItemProps[] = [
  { label: 'User' },
  {
    label: 'Settings',
    subItems: [{ label: 'Profile' }, { label: 'Account' }],
  },
  { label: 'Portfolio' },
];
