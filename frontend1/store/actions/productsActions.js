import * as types from '../types'
// import axios from 'axios'

export const addProductsAction = (payload) => ({type: types.ADD_PRODUCTS, payload})

export const fetchProducts = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:8000/api/product')
            .then(response => response.json())
            .then(json => dispatch(addProductsAction(json)))
    }
}

export const removeProductAction = (payload) => ({type: types.REMOVE_PRODUCT, payload})
export const addProductAction = (payload) => ({type: types.ADD_PRODUCT, payload})

export const fetchProduct = (slug) => {
    removeProductAction()
    return async (dispatch) => {
        await fetch(`http://127.0.0.1:8000/api/product/${slug}`)
            .then(response => response.json())
            .then(json => dispatch(addProductAction(json)))
    }
}
