import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import css from './Burger.module.css';

const burger = props => {
    let ingredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, index) => {
            return <BurgerIngredient key={ingKey + index} type={ingKey} />
        });
    }).reduce((prev, current) => {
        return prev.concat(current);
    }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;