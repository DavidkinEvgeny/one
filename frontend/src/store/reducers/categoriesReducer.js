import * as types from '../types'


const initialState = {
    categories: [],
    products: {}
}

export const categoriesReducer = (state=initialState, action) => {
    // if (action.payload.slug) {
    //     console.log(action.payload.slug);

    // }
    switch (action.type) {
        case types.ADD_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload]
            }
        case types.REMOVE_PRODUCT_CATEGORIES:
            return {
                ...state,
                products: {}
            }
        case types.ADD_PRODUCT_CATEGORIES:
        let products = state.categories.filter(category => category.slug === action.payload.slug)
        products = products[0]
            return {
                ...state,
                products: products
            }
            // return {
            //     ...state,
            //     products: action.payload
            // }
        default:
            return state
    }
}


// const initialState = {
//   category: {},
//   categories: [],
//   loading: false,
//   error: null
// }


// export const categoriesReducer = (state=initialState, action) => {
//   // console.log(state.categories.find(category => category.slug === action.payload));
//   switch (action.type) {
//     case types.GET_CATEGORY:
//       return {
//           ...state,
//           category: state.categories.find(category => category.slug === action.payload),
//         }
//     case types.GET_CATEGORIES:
//       return {
//           ...state,
//           categories: action.payload,
//         }
//     default:
//       return state
//   }
// }