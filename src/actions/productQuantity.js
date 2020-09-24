import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {
      
        dispatch({
            type: action === "encrease" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }

}

export const clearProduct = (name) => {
    return (dispatch) => {
       

        dispatch({
            type: CLEAR_PRODUCT,
            payload: name

        })
    }
}