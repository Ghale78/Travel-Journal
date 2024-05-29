import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducerSlices/counterSlice";
import boxSlice from "../reducerSlices/boxSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  } 
const store = configureStore({
    reducer:{
        counter: counterSlice,
        box: boxSlice
    }
})
export default store