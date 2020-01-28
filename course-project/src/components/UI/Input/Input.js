import React from 'react';
import css from './Input.module.css';

const input = props => {
    let inputElement = null;

    switch(props.tag) {
        case 'input':
            inputElement = <input
                                className={css.InputElement}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed}  />
            break;
        case 'textarea':
            inputElement = <textarea
                                className={css.InputElement}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed} />
            break;
        case 'select':
            inputElement = (
                <select
                    className={css.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                        {props.config.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                                className={css.InputElement}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed} />
    }
    return (
        <div className={css.Input}>
            <label className={css.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;