import * as types from '../types'
// import axios from 'axios'


export const addProductCartAction = (payload) => ({type: types.ADD_PRODUCT_CART, payload})
export const removeProductCartAction = (payload) => ({type: types.REMOVE_PRODUCT_CART, payload})
export const removeAllProductCartAction = (payload) => ({type: types.REMOVE_ALL_PRODUCT_CART, payload})

// export const addQuantityCartAction = (payload) => ({type: types.ADD_PRODUCT_CART, payload})
// export const addManyQuantityCartAction = (payload) => ({type: types.ADD_PRODUCT_CART, payload})
