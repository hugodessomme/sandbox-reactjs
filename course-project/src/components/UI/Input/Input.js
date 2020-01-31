import React from 'react';
import css from './Input.module.css';

const input = props => {
    let inputElement = null;
    const inputClasses = [css.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(css.Invalid);
    }

    let error = null;
    if (props.invalid && props.touched) {
        error = <p className={css.Error}>Please enter a valid value!</p>
    }

    switch(props.tag) {
        case 'input':
            inputElement = <input
                                className={inputClasses.join(' ')}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed}  />
            break;
        case 'textarea':
            inputElement = <textarea
                                className={inputClasses.join(' ')}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed} />
            break;
        case 'select':
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
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
                                className={inputClasses.join(' ')}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed} />
    }
    return (
        <div className={css.Input}>
            <label className={css.Label}>{props.label}</label>
            {inputElement}
            {error}
        </div>
    );
}

export default input;