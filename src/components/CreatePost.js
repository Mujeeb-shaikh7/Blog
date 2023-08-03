import React from 'react'
// import {firestore} from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useFormInput } from './hooks';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');
      const history=useNavigate()
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          title:title.value,
          subTitle:subTitle.value,
          content:content.value,
          createdAt:new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        
        history('/');
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
        
    }
    
  
  return (
    <div className='create-post'>
       <h1>Create Post</h1>

<form onSubmit={handleSubmit}>
  <div className="form-field">
    <label>Title</label>
    <input {...title} />
  </div>

  <div className="form-field">
    <label>Sub Title</label>
    <input
      {...subTitle}
    />
  </div>

  <div className="form-field">
    <label>Content</label>
    <textarea
      {...content}
    ></textarea>
  </div>

  <button className="create-post-btn" >
  
    Create Post
    </button>
</form>
    </div>
  )
}

export default CreatePost