import React, { useState } from 'react'
import { getDoc,doc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
const PostDetail = () => {
  const [posts,setPosts]=useState({});
  const {postId}= useParams();
  useEffect(()=>{
    async function fetchData(){
      const docRef = doc(db, "posts",postId);
      const docSnap = await getDoc(docRef);
      try {
        const docSnap = await getDoc(docRef);
        
        setPosts(docSnap.data());
    } catch(error) {
        console.log(error)
    }
    }
    fetchData()
  })
  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
    </div>
  )
}

export default PostDetail