import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const results = state.results.filter(result => result.id !== action.resultID);
    return updateObject({ state, results });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject({ state, results: state.results.concat({ id: new Date(), value: action.result * 2 }) })
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }

};

export default reducer;