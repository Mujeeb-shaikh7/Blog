import React, { useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            let colRef = collection(db, "posts");
            let docsSnap = await getDocs(colRef);
            try {
             let posts=docsSnap.docs.map((doc)=>{
                
                return {
                    id:doc.id,
                    ...doc.data()
                }
             });
             setPosts(posts)
            } catch (error) {
                console.log(error);
            }
       }
        fetchData()
        
},[]);
    
  return (
    <div>
        <div className='home'>
            <h1>Tech Blog</h1>
            <div id='blog-by'>Shaik Mujeeb</div>
        </div>
        {
            posts.map((post,index)=>(
                <div className='post' key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <small>{post.subTitle}</small>
                    <p>{post.content}</p>
                </div>
            ))
        
        }
    </div>
  )
}

export default Home