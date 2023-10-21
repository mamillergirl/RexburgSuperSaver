
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAGJ9hx09-W56uybOkQplyMei1Hl25H_es",
  authDomain: "rexburgsupersaver-test.firebaseapp.com",
  projectId: "rexburgsupersaver-test",
  storageBucket: "rexburgsupersaver-test.appspot.com",
  messagingSenderId: "678923622740",
  appId: "1:678923622740:web:581632c88e64bdf92290c1",
  measurementId: "G-WXZWKYDGT2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };