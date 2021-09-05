import React, { useRef } from 'react';

import MenuData from '../../data/MenuData';
import useStyles from './styleNavbar';

function Navbar() {
  const classes = useStyles();
  const menu = useRef(null);
  const navbar = useRef(null);

  const openMenu = () => {
    const nodeMenu = menu.current;
    const nodeNav = navbar.current;

    nodeMenu.classList.toggle('change');
    nodeNav.classList.toggle('change');
  };
  return (
    <>
      <nav ref={navbar} className={classes.navbar}>
        {MenuData.map((menuitem) => (
          <a className={classes.navbarLink} href={menuitem.path}>
            <span>{menuitem.title}</span>
            {menuitem.icon}
          </a>
        ))}
      </nav>
      <div ref={menu} className={classes.menu} onClick={openMenu} aria-hidden="true" />
    </>
  );
}

export default Navbar;
