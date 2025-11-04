import { useState } from 'react';
import s from './SidebarMenu.module.css';

export interface SidebarItemProps {
  /** Text label to display for item */
  label: string;
  /** Optional array of nested sub-items*/
  subItems?: SidebarItemProps[];
}

const SidebarItem = ({ label, subItems }: SidebarItemProps) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <li>
      <div
        className={s.sidebarItem}
        onClick={() => hasSubItems && setOpen(!open)}
      >
        <span>{label}</span>
        {hasSubItems && <span className={s.arrow}>{open ? '▲' : '▼'}</span>}
      </div>
      {hasSubItems && open && (
        <ul className={s.sidebarSubmenu}>
          {subItems!.map((sub, idx) => (
            <SidebarItem key={idx} {...sub} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
