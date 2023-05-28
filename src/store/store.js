import { configureStore } from '@reduxjs/toolkit'
import dataSliceReducer from '../slices/dataslice'
import cssSliceReducer from '../slices/cssSlice'
import productReducer from '../slices/productdataSlice'
export const store = configureStore({
    reducer:{
        productdataSlice:productReducer,
        dataSlice:dataSliceReducer,
        cssSlice:cssSliceReducer,
    
    }
})
