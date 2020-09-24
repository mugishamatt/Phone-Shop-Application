import {GET_NUMBERS_BASKET} from './types'

export const getNumbers =()=>{
    return (dispatch)=>{
        console.log("getting all basketnumbers ");
        dispatch({
            type:GET_NUMBERS_BASKET
        });
    }
}