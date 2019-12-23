import React from 'react';
import css from './BuildControl.module.css';

const buildControl = props => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.label}</div>
    <button className={css.Less} disabled={props.disabled} onClick={props.ingredientRemoved}>Less</button>
    <button className={css.More} onClick={props.ingredientAdded}>More</button>
  </div>
);

export default buildControl;