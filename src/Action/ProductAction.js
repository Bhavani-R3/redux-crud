import { createAsyncThunk } from '@reduxjs/toolkit'

// action const
const CREATE_PRODUCT = "product/create"
const READ_PRODUCT = "product/read"
const UPDATE_PRODUCT = "product/update"
const DELETE_PRODUCT = "product/delete"

// createAsyncThunk(const, callback(data))

// action methods
export const createProduct = createAsyncThunk(CREATE_PRODUCT, async (product) => {

})

export const readProduct = createAsyncThunk(READ_PRODUCT, async () => {

})

export const updateProduct = createAsyncThunk(UPDATE_PRODUCT, async ({product, id}) => {

})

export const deleteProduct = createAsyncThunk(DELETE_PRODUCT, async ({id}) => {

})
