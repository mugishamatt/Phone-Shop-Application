import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        iphoneOne: {
            name: "iphone 11",
            tagName: "iphoneOne",
            price: 700,
            numbers: 0,
            inCart: false
        },

        iphoneTwo: {
            name: "iphone 11 max",
            tagName: "iphoneOne",
            price: 700,
            numbers: 0,
            inCart: false
        },
        iphoneThree: {
            name: "iphone 11 max",
            tagName: "iphoneTwo",
            price: 700,
            numbers: 0,
            inCart: false
        },
        iphoneFour: {
            name: "iphone 10",
            tagName: "iphoneThree",
            price: 700,
            numbers: 0,
            inCart: false
        },
        iphoneFive: {
            name: "iphone 11 pro",
            tagName: "iphoneFour",
            price: 850,
            numbers: 0,
            inCart: false
        },
        samsungOne: {
            name: "samsung galaxy",
            tagName: "iphoneFive",
            price: 900.00,
            numbers: 0,
            inCart: false
        },
        samsungTwo: {
            name: "samsung 10",
            tagName: "iphoneSix",
            price: 800,
            numbers: 0,
            inCart: false
        },


    }

}
export default (state = initialState, action) => {

    //  let productSelected='';

    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            var productSelected = { ...state.products[action.payload] }
            // console.log(addQuantity);

            productSelected.numbers += 1;
            productSelected.inCart = true;

            // productSelected.inCart=true ? productSelected :productSelected.numbers += 1

            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }

            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            var productSelected = { ...state.products[action.payload] }
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }

            }
        // decreasing in cart
        case DECREASE_QUANTITY:
            var productSelected = { ...state.products[action.payload] };

            let newCartCost = 0;
            let newBasketNumbers = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers

            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1
            }
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                product: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        //delete product in cart
        case CLEAR_PRODUCT:
            var productSelected = { ...state.products[action.payload] };

            let numbersBackup = productSelected.numbers;
            console.log(productSelected)
            productSelected.numbers = 0;
            productSelected.inCart = false;
            console.log("number backup", numbersBackup)
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                products: {
                    ...state.products,
                    [action.payload]: productSelected

                }
            }




        default:
            return state;
    }
}