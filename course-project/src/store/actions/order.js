import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, order) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id,
    order
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseBurger = (order, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());

    axios
        .post('/orders.json?auth=' + token, order)
        .then(response => {
          console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data.name, order))
        })
        .catch(error => dispatch(purchaseBurgerFail(error)));
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    
    axios.get('/orders.json?auth=' + token)
      .then(response => {
          const orders = [];

          for (let key in response.data) {
              orders.push({
                  ...response.data[key],
                  id: key
              });
          }
          dispatch(fetchOrdersSuccess(orders));
      })
      .catch(error => dispatch(fetchOrdersFail(error)));
  }
}