import {
  Menubar,
  MenubarDropdown,
  MenubarMenu,
  MenubarTarget,
  MenuItem,
} from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import styles from './burguer.module.css';

interface BurguerProps {
  routes: { name: string; href: string }[];
}

const BurguerMenu = ({ routes }: BurguerProps) => {
  return (
    <div className={styles['burguer-menu']}>
      <Menubar>
        <MenubarMenu width={220}>
          <MenubarTarget>
            <div>
              <IconMenu2 />
            </div>
          </MenubarTarget>

          <MenubarDropdown>
            {routes.map((route) => (
              <MenuItem key={route.name} component="a" href={route.href}>
                {route.name}
              </MenuItem>
            ))}
          </MenubarDropdown>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default BurguerMenu;
