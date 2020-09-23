import React from 'react';
import iphone1 from "../Images/iphone1.jpeg"
import iphone2 from "../Images/iphone2.jpeg"
import iphone3 from "../Images/iphone3.jpeg"
import iphone4 from "../Images/iphone4.jpeg"
import samsung1 from "../Images/samsung1.jpeg"
import samsung2 from "../Images/samsung2.jpeg"
import { Container ,Col,Row} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addBasket} from '../actions/addActions'
import {Link}from 'react-router-dom'


 const Phones = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <Container className="img-container">
                <Row className="row2">
                <Col>
                <div className="iphoneimg">
                    <img src={iphone1} alt="iphone one" />
                    <h3>iphone 11</h3>
                    <h3>$700</h3>
                    <Link onClick={() =>props.addBasket('iphoneOne')} className="addToCart cart1" to="#">Add to cart</Link>
                </div>

                <div className="iphoneimg">
                    <img src={iphone2} alt="iphone two" />
                    <h3>iphone 11 pro</h3>
                    <h3>$850</h3>
                    <Link onClick={ () =>props.addBasket('iphoneTwo')}  className="addToCart cart2" to="#">Add to cart</Link>
                </div>
                 </Col>
                 
                 <Col>
                <div className='iphoneimg'>
                    <img src={iphone3} alt="iphone three" />
                    <h3>iphone 11 max</h3>
                    <h3>$1000</h3>
                    <Link onClick={ () =>props.addBasket("iphoneThree")} className="addToCart cart3" to="#">Add to cart</Link>
                </div>
                <div className="iphoneimg">
                    <img src={iphone4} alt="iphone four" />
                    <h5>iphone 10</h5>
                    <h5>$900</h5>
                    <Link onClick={ () =>props.addBasket("iphoneFour")}  className="addToCart cart4" to="#">Add to cart</Link>
                </div>
                </Col>


                <Col>
                <div className="samsungimg">
                    <img src={samsung1} alt="" />
                    <h3>samsung galaxy</h3>
                    <h3>$1000</h3>
                    <Link onClick={ () =>props.addBasket("samsungOne")} className="addToCart cart5" to="#">Add to cart</Link>
                </div>
                <div className="samsungimg">
                    <img src={samsung2} alt=" " />
                    <h3>samsung 10</h3>
                    <h3>$900</h3>
                    <Link onClick={ () =>props.addBasket("samsungTwo")} className="addToCart cart6" to="#">Add to cart</Link>
                </div>
                </Col>
                </Row>
            </Container>

          
        </React.Fragment>
    )
};
export default connect(null,{addBasket})(Phones);