import React from 'react';
import css from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={css.NavigationItem}>
        <a 
            className={props.active ? css.active : null}
            href={props.link}>
                {props.children}
        </a>
    </li>
);

export default navigationItem;