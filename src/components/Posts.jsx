import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from './PostCard';

export default function Posts(params) {
    const post = useSelector(state=> state.currentPost)
    const allPosts = useSelector(state=>state.data)
    

    let handlePosts = ()=>{
        dispatch(addPost({id,title,body,img}))
}



    return(
        <div className='Posts-main-container'>
            <h5 className='User-id'>Post Number: {post.id}</h5>
        <div className='details-main-post'>
            { post ?    
            <div className='posts'>
          <img className='img' src={post.img} />
            <h5>{post.title}</h5>
           <div className='posts-area'> 
             <p>{post.body}</p> 
           </div>
        </div>
            :<h4>..loading</h4>
            }
        </div>
        <h5 className='more-heading'>More Posts</h5>
            <div className='more-posts'>
              
            { allPosts.filter(item=> item.id!=post.id).map(post=>{
              return <PostCard key={post.id} id={post.id}
               
                title={post.title} body={post.body}
              />
               })}
            </div>
        </div>
    )
};
