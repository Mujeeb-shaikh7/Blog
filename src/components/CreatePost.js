import React from 'react'
import { useState } from 'react';
import {firestore} from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      console.log('title', title);
      console.log('subTitle', subTitle);
      console.log('content', content);
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          title,
          subTitle,
          content,
          createdAt:new Date()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    //   firestore.collection('posts').add({
    //     title,
    //     subTitle,
    //     content,
    //     createdAt:new Date()
    //   })
    }
  return (
    <div className='create-post'>
       <h1>Create Post</h1>

<form onSubmit={handleSubmit}>
  <div className="form-field">
    <label>Title</label>
    <input value={title} onChange={(e) => setTitle(e.target.value)} />
  </div>

  <div className="form-field">
    <label>Sub Title</label>
    <input
      value={subTitle}
      onChange={(e) => setSubTitle(e.target.value)}
    />
  </div>

  <div className="form-field">
    <label>Content</label>
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
    ></textarea>
  </div>

  <button className="create-post-btn">Create Post</button>
</form>
    </div>
  )
}

export default CreatePost