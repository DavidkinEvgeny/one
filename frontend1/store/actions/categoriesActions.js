import * as types from '../types'
// import axios from 'axios'


export const addCategoriesAction = (payload) => ({type: types.ADD_CATEGORIES, payload})

export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:8000/api/category')
            .then(response => response.json())
            .then(json => dispatch(addCategoriesAction(json)))
    }
}

export const removeProductCategoriesAction = (payload) => ({type: types.REMOVE_PRODUCT_CATEGORIES, payload})
export const addProductCategoriesAction = (payload) => ({type: types.ADD_PRODUCT_CATEGORIES, payload})

export const fetchProductCategories = (slug) => {
    removeProductCategoriesAction()
    return async (dispatch) => {
        await fetch(`http://127.0.0.1:8000/api/category/${slug}`)
            .then(response => response.json())
            .then(json => dispatch(addProductCategoriesAction(json)))
    }
}

// export const fetchCategories = () => async dispath => {
//   const res = await axios.get('http://127.0.0.1:8000/api/category');

//     dispath({
//         type: types.GET_CATEGORIES,
//         payload: res.data
//     })
// }

// export const getCategory = (payload) => dispath => {
//   // console.log(payload);
//   dispath({
//     type: types.GET_CATEGORY,
//     payload: payload
//   })
// }
// import * as types from '../types'
// // import axios from 'axios'

