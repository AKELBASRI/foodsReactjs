import React, { useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MenuData from '../data/MenuData';

const animationOpacity = () => {
  const result = {};

  for (let index = 1; index < 6; index += 1) {
    const seconds = 3 + index;
    result[`&:nth-child(${index})`] = {

      transition: `opacity.4s 0.${seconds}s, color 0.3s`,

    };
  }

  return result;
};
const useStyles = makeStyles(() => ({
  navbar: {
    width: '100%',
    height: '14rem',
    backgroundColor: '#000',
    position: 'fixed',
    top: '-14rem',
    // top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0.2rem 0.2rem 0.2rem #000',
    transition: 'top 0.4s',
    '&.change': {
      top: 0,
      transition: 'top 0.4s 0.2s',
    },

  },

  navbarLink: {
    color: '#aaa',
    margin: '0 4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'color.3s, opacity.2s',
    opacity: 0,
    '&:hover': {
      color: '#fff',
    },
    '& span': {
      fontSize: '2.5rem',
      fontWeight: '900',
      letterSpacing: '0.5rem',
      marginTop: '0.5rem',
      '@media (max-width:900px)': {

        fontSize: '2rem',
      },
    },
    '& svg': {
      fontSize: '7rem',
      '@media (max-width:900px)': {
        fontSize: '4rem',
      },
    },
    '.change &': {
      opacity: 1,
    },
    '@media (max-width:900px)': {
      margin: '2rem',
    },
    '@media (max-width:550px)': {
      margin: '0 0.7rem',
    },
    ...animationOpacity(),

  },

  menu: {
    width: '4rem',
    height: '6rem',
    backgroundColor: '#000',
    position: 'fixed',
    top: '1rem',
    left: '5rem',
    borderRadius: '30rem 30rem 15rem 15rem',
    boxShadow: ' 0.1rem 0.1rem 0.1rem #000, -0.1rem -0.1rem 0.1rem #000',
    cursor: 'pointer',
    transition: ' top 0.4s 0.2s',
    zIndex: 10,
    '&::before': {
      content: '""',
      width: '0.3rem',
      height: '15rem',
      backgroundColor: '#000',
      position: 'absolute',
      top: '-15rem',
      left: 'calc(50% - 0.15rem)',
      boxShadow: '0.1rem 0 0.1rem #000',
    },
    '&.change': {
      top: '15rem',
      transition: 'top 0.4s',
    },
  },
}
));

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
