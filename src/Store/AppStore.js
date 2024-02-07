import { configureStore, combineReducers } from '@reduxjs/toolkit'
import UserSlice from './../Reducer/UserReducer';
import ProductSlice from './../Reducer/ProductReducer';

// combine reducer
const ProjectReducer = combineReducers({
    users: UserSlice.reducer,
    products: ProductSlice.reducer
}) 

const AppStore = configureStore({
    reducer: ProjectReducer,
    devTools: true
})

export default AppStore