import React from 'react';
import css from './Button.module.css';

const button = props => (
    <button
        disabled={props.disabled}
        className={[css.Button, css[props.type]].join(' ')}
        onClick={props.clicked}>
            {props.children}
    </button>
);

export default button;