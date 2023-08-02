import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOevUtiL6umONZ4YL9CeNd-6kCZT5wZ-o",
  authDomain: "blog-ca739.firebaseapp.com",
  projectId: "blog-ca739",
  storageBucket: "blog-ca739.appspot.com",
  messagingSenderId: "828021254196",
  appId: "1:828021254196:web:e1a76e2334a61073320261"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db};