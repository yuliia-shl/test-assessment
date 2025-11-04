import s from './SidebarMenu.module.css';
import SidebarItem, { type SidebarItemProps } from './SidebarItem';

interface SidebarMenuProps {
  /** Array of items for sidebar menu */
  items: SidebarItemProps[];
  /** Determines whether the sidebar is open or closed */
  isOpen: boolean;
  /** Callback function called when the sidebar is requested to close */
  onClose: () => void;
}

const SidebarMenu = ({ items, isOpen, onClose }: SidebarMenuProps) => {
  return (
    <>
      <div
        className={`${s.sidebarBackdrop} ${isOpen ? s.visible : ''}`}
        onClick={onClose}
      />
      <aside className={`${s.sidebar} ${isOpen ? s.open : ''}`}>
        <ul className={s.sidebarList}>
          {items.map((item, idx) => (
            <SidebarItem key={idx} {...item} />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SidebarMenu;
