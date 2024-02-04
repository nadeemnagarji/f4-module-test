import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import React from 'react';


const initialState = {
    isloading:true,
    data:null,
    error:null,
    currentPost:null,
}

export const fetchPosts = createAsyncThunk("fetchPost",async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const  data = await res.json()
    console.log(data);
    return data

})


let PostSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.currentPost = action.payload
        }
    },
     extraReducers:(builder)=>{
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isloading= false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isloading= false
            state.data = null
            state.error = action.payload
        })
        builder.addCase(fetchPosts.pending,(state,action)=>{
            state.isloading=true
        })
     }
})

export default PostSlice.reducer
export const {addPost} = PostSlice.actions