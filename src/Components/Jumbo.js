import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import jumbopic from '../Assets/jumbopic.jpg'
import styled from "styled-components"


const Styles = styled.div`
  .jumbo {
    background: url(${jumbopic}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbo =()=>{
    return(
        <Styles>
            <Container>
        <Jumbotron fluid className="jumbo">
            <div className="overlay"></div>
  
    <h1>Fluid jumbotron</h1>
   
    <p>phones Avvailables</p> 
     {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHCHG60ltNTjd7OGI6GRupdXe68VQLJbASiQ&usqp=CAU"></img> */}

</Jumbotron>
</Container>
</Styles>
    )
}
export default Jumbo;