import * as types from '../types'

const initialState = {
    products: [],
    product: {}
}

export const productsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            }
        case types.REMOVE_PRODUCT:
            return {
                ...state,
                product: {}
            }
        case types.ADD_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}
