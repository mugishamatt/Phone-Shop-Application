import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const initialState={};
const middleware=[thunk];

//add redux persist to persit stopre in local storage

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

//store
export const store= createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)
export default store;