import React from 'react';
import css from './Input.module.css';

const input = props => {
    let inputElement = null;

    switch(props.tag) {
        case 'input':
            inputElement = <input
                                className={css.InputElement}
                                {...props.config}
                                value={props.value} />
            break;
        case 'textarea':
            inputElement = <textarea
                                className={css.InputElement}
                                {...props.config}
                                value={props.value} />
            break;
        default:
            inputElement = <input
                                className={css.InputElement}
                                {...props.config}
                                value={props.value} />
    }
    return (
        <div className={css.Input}>
            <label className={css.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;