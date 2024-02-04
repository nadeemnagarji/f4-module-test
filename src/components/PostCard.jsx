import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import icon from '../RightIcon.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/PostSlice';

export default function PostCard({id,title,body}) {

    const [img,setImg] = useState(null)
    const dispatch = useDispatch(null)
    let fetchImg = async(id)=>{
        let res = await fetch(`https://picsum.photos/200?random=${id}`)
        setImg(res.url)
    }
    let handlePosts = ()=>{
            dispatch(addPost({id,title,body,img}))
    }
    useEffect(()=>{
       fetchImg(id)
    },[])

    return(
        <div className='posts'>
            {img && <img className='img' src={img} />}
            <h5>{title}</h5>
           <div className='posts-area'> 
             <p>{body.slice(0,50)}</p> 
             <Link to={"/details"} onClick={handlePosts}>
             <img className='svg' src={icon} />
             </Link>
           </div>
        </div>
    )
};
