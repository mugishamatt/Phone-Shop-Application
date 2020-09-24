
import React from 'react';
import Routes from "./NavBars/Routes"

import './App.css';
import Jumbo from './Components/Jumbo';
import { Container } from 'react-bootstrap';
import Layout from './Components/Layout';
import { Provider } from 'react-redux';
import { store, persistor } from './store.js'
import { PersistGate } from 'redux-persist/integration/react'




const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <div className="App">

            <Routes />
            <Jumbo />
          </div>

        </Layout>
      </PersistGate>
    </Provider>
  );
}



export default App;
