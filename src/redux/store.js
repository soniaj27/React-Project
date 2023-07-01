import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import  productReducer  from "../redux/reduces/productReducer";
import addtocartReducer from "./reduces/addtocartReducer";

const rootReducer = combineReducers({
    product: productReducer,
    addtocart : addtocartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;