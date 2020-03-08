import * as actionTypes from './actionTypes';

export const saveResult = result => {
  return { 
    type: actionTypes.STORE_RESULT, 
    result 
  };
};

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // Ne pas trop utiliser getState
      // const oldCOunter = getState().counterReducer.counter;
      // console.log(oldCOunter);
      dispatch(saveResult(result))
    }, 2000);
  }
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultID: id
  };
};