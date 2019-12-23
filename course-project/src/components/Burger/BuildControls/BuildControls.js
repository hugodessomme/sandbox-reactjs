import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import css from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = props => (
  <div className={css.BuildControls}>
    <p>CurrentPrice: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl 
        key={control.label} 
        label={control.label} 
        type={control.type} 
        disabled={props.disabled[control.type]}
        ingredientAdded={() => props.ingredientAdded(control.type)}
        ingredientRemoved={() => props.ingredientRemoved(control.type)} />
     ))}
  </div>
);

export default buildControls;