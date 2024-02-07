import { createSlice } from '@reduxjs/toolkit'
import { createUser, readUser, updateUser, deleteUser } from '../Action/UserAction'

// initial state

// slice (reducer)

// const UserSlice = createSlice({name, state, slice controller})
const UserSlice = createSlice({
    name: "user",
    initialState: [],
    extraReducers: (builder) => {
        // addCase(action,reducer)
        builder.addCase(createUser.fulfilled, (state,action) => {
            if(action.payload) {
                state.push(action.payload)
            }
        })
               .addCase(createUser.rejected, () => {})
               .addCase(readUser.fulfilled, (state,action) => {
                    return [...action.payload]
                })
               .addCase(readUser.rejected, () => {})
               .addCase(updateUser.fulfilled, (state,action) => {
                    const index = state.findIndex(item => item.id === action.payload.id)
                    state[index] = {
                        ...state[index], ...action.payload
                    }
                })
               .addCase(updateUser.rejected, () => {})
               .addCase(deleteUser.fulfilled, (state,action) => {
                    const index = state.findIndex((item) => item.id === action.payload.id)
                    state.splice(index,1)
                })
               .addCase(deleteUser.rejected, () => {})
    }
})


export default UserSlice