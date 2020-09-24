import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log("inside product Quantity");
        console.log("the action is", action);
        console.log("the product name is", name);
        dispatch({
            type: action === "encrease" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }

}

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log("inside clear product");
        console.log("product Name", name);

        dispatch({
            type: CLEAR_PRODUCT,
            payload: name

        })
    }
}