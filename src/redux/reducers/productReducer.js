import { ActionTypes } from "../contants/action-types";
const intialState = {
  products: []
};
// or export const productReducer = (state = intialState, {type, payload})
export const productReducer = (state = intialState.products, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
