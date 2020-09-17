
import React from 'react';
import Routes from "./NavBars/Routes"

import './App.css';
import Jumbo from './Components/Jumbo';
import { Container } from 'react-bootstrap';
import Layout from './Components/Layout';



const App =() => {
 
  
    return (
      <Layout>
      <div className="App">

      <Routes/>
      <Jumbo/>
        
      </div>
      </Layout>
    );
  }
 


export default App;
