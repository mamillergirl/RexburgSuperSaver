import Header from "./header";
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";


import { addDoc, collection } from 'firebase/firestore';

import { db } from '../firebaseConfig';


function Register(props) {
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [password2, setPassword2] = useState('')


     const inputRef = useRef(null);
     const inputRef2 = useRef(null);



     const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      // Event handler to update the password state
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const handlePasswordChange2 = (e) => {
        setPassword2(e.target.value);
      };
    
 

      const handleDivClick = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };

      const handleDivClick2 = () => {
        if (inputRef2.current) {
          inputRef2.current.focus();
        }
      };

      const handleAddUser = async (uid) => {
        try {
          // Add user data to Firestore
          const docRef = await addDoc(collection(db, "users"), {
            email,
            uid
          });
          alert("Document added successfully");
        } catch (error) {
          console.error("Error adding document: ", error);
          alert("Error adding document: " + error.message);
        }
      };
    

    
      
      const handleSignUp = async () => {
          if (password !== password2 || email == "" | password == "") {
            // Passwords don't match, show an alert
            alert("Invalid email or password. Please try again.");
            return;
          }
        const auth = getAuth();
        
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          const uid = user.uid;
          
         
          handleAddUser(uid)
          
          
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Handle error
        }
        
      };
    
     
  return (
    <>
    <Header/>
      <div className="div">
        <div className="div-2">
          <div className="div-3">Register</div>
          <div className = "loginBox div-4">
            <div className="div-5">
              <input className="div-6" type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}/>
              <div className="div-7" onClick={handleDivClick}>
               <input className="div-8" 
                ref={inputRef}
               type="password"
               id="password"
               value={password}
               onChange={handlePasswordChange}
               />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                  className="img"
                />
              </div>
              <div className="div-7" onClick={handleDivClick2}>
               <input className="div-8" 
                ref={inputRef2}
               type="password"
               id="password2"
               value={password2}
               onChange={handlePasswordChange2}
               />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91c3e-99db-4ac1-9980-4911fa80ceeb?apiKey=972b909c88a047a3bdbd2a879eeb0409&"
                  className="img"
                />
              </div>
            </div>
            
            <div className="div-9">
              <div className="div-10">
                
                
              </div>
        
            </div>
         
          <div className="div-14">
            <button onClick={handleSignUp} className="div-15">Register</button>
          </div>
          </div>
          <div className="div-16">
            <div className="div-17">Already have an account?</div>
            <Link to='/login' className="div-18"> Login</Link>
          </div>
        </div>
        <Footer/>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          align-items: center;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }
        .div-2 {
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--gray-scale-gray-50, #f2f2f2);
          box-shadow: 0px 0px 56px 0px rgba(0, 38, 3, 0.08);
          background-color: var(--gray-scale-white, #fff);
          align-self: center;
          display: flex;
          width: 520px;
          max-width: 100%;
          flex-direction: column;
          margin: 240px 240px;
          padding: 24px 20px 32px;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin: 40px 0;
          }
        }
        .div-3 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 120%;
          align-self: center;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-3 {
            text-wrap: initial;
          }
        }
        .div-4 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          margin-top: 20px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            margin-right: 4px;
          }
        }
        .div-5 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
          }
        }
        div.loginBox.div-4 {
            border: none;
        }
        .div-6 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          align-self: stretch;
          padding: 14px 16px;
          max-width: 95%;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          align-items: flex-start;
          border-radius: 6px;
          border: 1px solid var(--gray-scale-gray-100, #e6e6e6);
          background-color: var(--gray-scale-white, #fff);
          align-self: stretch;
          display: flex;
          margin-top: 12px;
          justify-content: space-between;
          gap: 0px;
          padding: 14px 16px 14px;
          padding-right: 14px;
          width: 95%;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-8 {
          color: var(--gray-scale-gray-400, #999);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
          align-self: stretch;
          max-width: 452px;
          flex-grow: 1;
          flex-basis: auto;
        }
        .img {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 20px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-9 {
          justify-content: space-between;
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          margin-top: 16px;
          width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-10 {
          align-items: flex-start;
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 6px;
        }
        .div-11 {
          border-radius: 3px;
          border: 1px solid var(--gray-scale-gray-200, #ccc);
          background-color: var(--gray-scale-white, #fff);
          align-self: stretch;
          display: flex;
          width: 20px;
          height: 20px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-12 {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-12 {
            text-wrap: initial;
          }
        }
        .div-13 {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-13 {
            text-wrap: initial;
          }
        }
        .div-14 {
          justify-content: center;
          align-items: center;
          border-radius: 43px;
          background-color: var(--branding-success, #00b207);
          align-self: stretch;
          display: flex;
          margin-top: 20px;
          flex-direction: column;
          padding: 14px 20px;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            margin-right: 4px;
          }
        }
        .div-15 {
          color: var(--gray-scale-white, #fff);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 120%;
          align-self: center;
          text-wrap: nowrap;
        }
        @media (max-width: 991px) {
          .div-15 {
            text-wrap: initial;
          }
        }
        .div-16 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 24px;
          width: 207px;
          max-width: 100%;
          gap: 0px;
        }
        .div-17 {
          color: var(--gray-scale-gray-600, #666);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-18 {
          color: var(--gray-scale-gray-900, #1a1a1a);
          font-family: Poppins, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          align-self: stretch;
          text-wrap: nowrap;
          background-color: white;
        }
        .div-18 p {
            background-color: white;
        }
        @media (max-width: 991px) {
          .div-18 {
            text-wrap: initial;
          }
        }
      `}</style>
    </>
  );
}



export default Register