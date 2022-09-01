// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3XLOu6bnO4Tse_fk8hKhPfxmvnyl6BOk',
  authDomain: 'todo-app-1854c.firebaseapp.com',
  projectId: 'todo-app-1854c',
  storageBucket: 'todo-app-1854c.appspot.com',
  messagingSenderId: '381060129338',
  appId: '1:381060129338:web:9287e5b7033e7e770ecb03',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
