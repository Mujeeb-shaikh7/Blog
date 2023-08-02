import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOevUtiL6umONZ4YL9CeNd-6kCZT5wZ-o",
  authDomain: "blog-ca739.firebaseapp.com",
  projectId: "blog-ca739",
  storageBucket: "blog-ca739.appspot.com",
  messagingSenderId: "828021254196",
  appId: "1:828021254196:web:e1a76e2334a61073320261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=firebase.firestore;