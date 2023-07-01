import {ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT} from "../actions/actionTypes"


const initialState = [];

const addtocartReducer = (state = initialState, action) => {
       switch(action.type){
                case ADD_TO_CART:
                        return [...state,action.payload]
                case REMOVE_FROM_CART: 
                        return state.filter((item) => item.id !== action.payload);
                case CHECKOUT:
                        return [];
                default:
                        return state
       }
}

export default addtocartReducer;