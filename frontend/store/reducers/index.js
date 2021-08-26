import {combineReducers} from 'redux'
import { cartsReducer } from './cartsReducers';
import { categoriesReducer } from './categoriesReducer';
import {productsReducer} from './productsReducer';



export default combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    carts: cartsReducer
})