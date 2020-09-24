
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';

import iphone1 from "../Images/iphone1.jpeg"
import iphone2 from "../Images/iphone2.jpeg"
import iphone3 from "../Images/iphone3.jpeg"
import iphone4 from "../Images/iphone4.jpeg"
import samsung1 from "../Images/samsung1.jpeg"
import samsung2 from "../Images/samsung2.jpeg"


const Cart = ({ basketProps, productQuantity, clearProduct }) => {
    console.log(basketProps);

    // loop throught products array to render in cart
    let productsInCart = [];


    Object.keys(basketProps.products).forEach(function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);

        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])

        }
        console.log(productsInCart)
    })
    //images
    //  const productsImages=[iphone1,iphone2,iphone3,iphone4,samsung1,samsung2]

    const productsImages = (product) => {
        if (product.tagName === 'iphoneOne') {
            return iphone1
        }
        if (product.tagName === 'iphoneTwo') {
            return iphone2
        }
        if (product.tagName === 'iphoneThree') {
            return iphone3
        }
        if (product.tagName === 'iphoneFive') {
            return iphone4
        }
        if (product.tagName === 'iphoneSix') {
            return samsung1
        }
        if (product.tagName === 'iphoneSeven') {
            return samsung2
        }
    }



    productsInCart = productsInCart.map((product, index) => {
        // console.log("my product is:")
        // console.log("product")
        return (
            <React.Fragment key={index}>
                <div className="product">

                    <AiFillCloseCircle onClick={() => clearProduct(product.tagName)} className="deletebtn" /><img src={productsImages(product)} />
                    <span className="sm-hide"> {product.name}</span>
                </div>

                <div className="price-sm-hide">${product.price},00</div>
                <div className="quantity">
                    <IoIosArrowRoundBack onClick={() => productQuantity('decrease', product.tagName)} /><span> {product.numbers}</span>
                    <IoIosArrowRoundForward onClick={() => productQuantity('encrease', product.tagName)} />
                </div>
                <div className="total">${product.numbers * product.price},00</div>

            </React.Fragment>
        )


    });
    return (
        <div className="container-products">
            {/* <h1> heyyy carts </h1> */}
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="product-sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">${basketProps.cartCost},00</h4>
            </div>


        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);
