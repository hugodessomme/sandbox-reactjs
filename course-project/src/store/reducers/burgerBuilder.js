import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const addIngredient = (state, action) => {
  const addedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
  const addedIngredients = updateObject(state.ingredients, addedIngredient);
  const addedState = {
    ingredients: addedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
    building: true
  };
  
  return updateObject(state, addedState);
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
    building: false
  });
}

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
}

const removeIngredient = (state, action) => {
  const removedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] - 1 };
  const removedIngredients = updateObject(state.ingredients, removedIngredient);
  const removedState = {
    ingredients: removedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
    building: true
  };
  return updateObject(state, removedState);
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);    
    default: return state;
  }
};

export default reducer;