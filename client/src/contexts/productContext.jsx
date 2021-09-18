import axios from "axios";
import { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { ADD_PRODUCT, apiUrl, COUNTDOWN_FLASHSALE_SUCCESS, DELETE_PRODUCT, DESTROY_PRODUCT_STATE, PRODUCT_LOADED_FAIL, PRODUCT_LOADED_SUCCESS, PR_DETAIL_LOADED_FAIL, PR_DETAIL_LOADED_SUCCESS, PR_FLASHSALE_LOADED_FAIL, PR_FLASHSALE_LOADED_SUCCESS, UPDATE_COUNTDOWN_FLASHSALE, UPDATE_PRODUCT } from "./constants";


export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    //State
    const [productState, dispatch] = useReducer(productReducer, {
        products: [], productDetail: {}, productsFlashsale: [], flashsale: {}
    })
    //Get all product
    const getProducts = async (limit, searchKey) => {
        try {
            const response = await axios.get(`${apiUrl}/product?limit=${limit}&searchKey=${searchKey}`);
            if(response.data.success){
                dispatch({
                    type: PRODUCT_LOADED_SUCCESS,
                    payload: response.data.products
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCT_LOADED_FAIL
            })
        }
    }
    //Get product by condition
    const getProductsByCondition = async (limit, filterKey, sortKey, searchKey) => {
        try {
            const response = await axios.get(`${apiUrl}/product/condition?limit=${limit}&${filterKey}&sortKey=${sortKey}&searchKey=${searchKey}`);
            if(response.data.success){
                dispatch({
                    type: PRODUCT_LOADED_SUCCESS,
                    payload: response.data.products
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCT_LOADED_FAIL
            })
        }
    }
    //Get product detail
    const getProductDetail = async (prID) => {
        try {
            const response = await axios.get(`${apiUrl}/product/product-detail/${prID}`)
            if(response.data.success){
                dispatch({
                    type: PR_DETAIL_LOADED_SUCCESS,
                    payload: response.data.product
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: PR_DETAIL_LOADED_FAIL
            })
        }
    }
    //Get flashsale product
    const getProductsFlashsale = async (limit, filterKey, sortKey, searchKey) => {
        try {
            const response = await axios.get(`${apiUrl}/product/condition?limit=${limit}&${filterKey}&sortKey=${sortKey}&searchKey=${searchKey}`);
            if(response.data.success){
                dispatch({
                    type: PR_FLASHSALE_LOADED_SUCCESS,
                    payload: response.data.products
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: PR_FLASHSALE_LOADED_FAIL
            })
        }
    }
    //Get countdown flashsale
    const getCountDownFlashsale = async () => {
        try {
            const response = await axios.get(`${apiUrl}/flashsale`);
            if(response.data.success){
                dispatch({
                    type: COUNTDOWN_FLASHSALE_SUCCESS,
                    payload: response.data.flashsale
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    //Update countdown flashsale
    const updateCountdownFlashsale = async (id, updateData) => {
        try {
            const response = await axios.put(`${apiUrl}/flashsale/update/${id}`, updateData);
            if(response.data.success){
                dispatch({
                    type: UPDATE_COUNTDOWN_FLASHSALE,
                    payload: response.data.updatedFlash
                })
            }
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const destroyGetProduct = () => {
        dispatch({
            type: DESTROY_PRODUCT_STATE
        })
    }
    //Add product
    const addProduct = async (addData) => {
        try {
            const response = await axios.post(`${apiUrl}/product/create`, addData);
            if(response.data.success){
                dispatch({
                    type: ADD_PRODUCT,
                    payload: response.data.product
                })
            }
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    //Update product
    const updateProduct = async (prID, updateData) => {
        try {
            const response = await axios.put(`${apiUrl}/product/${prID}`, updateData);
            if(response.data.success){
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: response.data.updatePr
                })
            }
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    //Delete product
    const deleteProduct = async (prID) => {
        try {
            const response = await axios.delete(`${apiUrl}/product/${prID}`);
            if(response.data.success){
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: prID
                })
            }
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    //Get

    const prContextProvider = {
        productState,
        getProducts,
        getProductsByCondition,
        getProductDetail,
        getProductsFlashsale,
        destroyGetProduct,
        addProduct,
        updateProduct,
        deleteProduct,
        getCountDownFlashsale,
        updateCountdownFlashsale
    }
    return (
        <ProductContext.Provider value={prContextProvider}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;