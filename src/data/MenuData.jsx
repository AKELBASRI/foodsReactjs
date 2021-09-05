import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import React from 'react';

const MenuData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Meals',
    path: '/',
    icon: <RestaurantIcon />,
  },
  {
    title: 'Burger',
    path: '/',
    icon: <FastfoodIcon />,
  },
  {
    title: 'Pizza',
    path: '/',
    icon: <LocalPizzaIcon />,
  },
  {
    title: 'Contact',
    path: '/',
    icon: <ContactPhoneIcon />,
  },
];
export default MenuData;
