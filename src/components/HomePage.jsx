import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/PostSlice';
import PostCard from './PostCard';

export default function HomePage(params) {

        const posts = useSelector(state=>state.data)
        const isloading = useSelector(state=>state.isloading)
        const dispatch = useDispatch()

        useEffect(()=>{
            dispatch(fetchPosts())
        },[])

        let print = ()=>{
            if(posts){
               posts.map(post=>{
                console.log(post);
               })
            }
        }

    if(isloading===true){
        return <h1>...loading</h1>
    }
        return(
            <div className='home-parent-div'>
                <div className='title'><h5>Social Media For Travellers</h5></div>
            <div className='home-div'>
              { posts.map(post=>{
              return <PostCard key={post.id} id={post.id}
               
                title={post.title} body={post.body}
              />
               })}
            </div>
            </div>
        )
};
