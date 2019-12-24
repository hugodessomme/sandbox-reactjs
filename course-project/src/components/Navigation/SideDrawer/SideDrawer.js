import React from 'react';
import Logo from '../../Logo/Logo';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import css from './SideDrawer.module.css';

const sideDrawer = props => {
    let classes = [css.SideDrawer, css.Close];

    if (props.show) {
        classes = [css.SideDrawer, css.Open];
    }
    
    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={classes.join(' ')}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;