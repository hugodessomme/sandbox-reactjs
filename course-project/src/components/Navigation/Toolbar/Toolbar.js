import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import css from './Toolbar.module.css';

const toolbar = props => (
    <header className={css.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={css.Logo}>
            <Logo />
        </div>
        <nav className={css.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuthenticated} />
        </nav>
    </header>
);

export default toolbar;