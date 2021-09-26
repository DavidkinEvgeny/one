import * as types from '../types'


const initialState = {
    cartProducts: [],
}

export const cartsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_CART:
            if (!state.cartProducts.includes(action.payload)) {
                return  {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload]
                }
            }
            else {
                return  {
                    ...state,
                    cartProducts: [...state.cartProducts]
                }
            }
        case types.REMOVE_PRODUCT_CART:
            return {
                ...state,
                cartProducts: state.cartProducts.filter(product => product.slug !== action.payload)
            }
        case types.REMOVE_ALL_PRODUCT_CART:
            return {
                ...state,
                cartProducts: []            
            }
        default:
            return state
    }
}

