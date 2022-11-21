import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import combineReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage
};

const persistRedux = persistReducer (
    persistConfig, combineReducer
);

const store = configureStore ({
    reducer: persistRedux,
    devTools: process.env.Node_env !== 'production',
    middleware: [thunk]
});

export default store;