import { createAsyncThunk } from '@reduxjs/toolkit'
import { readAllUser, readSingleUser, userCreate, userUpdate, userDelete } from '../API/UserApi'

// action const
const CREATE_USER = "user/create"
const READ_USER = "user/read"
const UPDATE_USER = "user/update"
const DELETE_USER = "user/delete"

// createAsyncThunk(const, callback(data))

// action methods
export const createUser = createAsyncThunk(CREATE_USER, async (user) => {
    console.log(`action create user =`, user)
    const res = await userCreate(user)
    return res.data
})

export const readUser = createAsyncThunk(READ_USER, async () => {
    const res = await readAllUser()
    return res.data
})

export const updateUser = createAsyncThunk(UPDATE_USER, async ({user, id}) => {
    const res = await userUpdate({ user, id })
    return res.data
})

export const deleteUser = createAsyncThunk(DELETE_USER, async ({id}) => {
    await userDelete(id)
    return { id }
})
