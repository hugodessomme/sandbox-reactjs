import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={css.NavigationItem}>
        <NavLink
            to={props.link}
            activeClassName={css.active}
            exact={props.exact}>
                {props.children}
        </NavLink>
    </li>
);

export default navigationItem;