"use client"
import { Link } from 'react-router-dom';

function SmallNav(){
    return (
        <>
        <div className="div-18">
        <div className="div-19">
          <div className="div-20">
            <Link  to="/" className="div-21">Home</Link>
            <Link className="div-22">Albertsons</Link>
            <Link className="div-23">Broulims</Link>
            <Link className="div-24">Favorites</Link>
            <Link  className="div-25">About Us</Link>
          </div>
        </div>
        </div>
         <style jsx>{`
            .div-18 {
                background: black;
              }
              
              .div-19 {
                padding: 10px;
              }
              
              .div-20 {
                display: flex;
                flex-direction: column;
                margin: 0;
              }
              
              .div-18 a {
                text-decoration: none;
                color: white;
                padding: 8px 0;
                text-align: left;
              }
              
              /* Style individual links */
              .div-21:hover, .div-22:hover, .div-23:hover, .div-24:hover, .div-25:hover {
                background-color: #444; /* Darken background on hover */
              }
              
         `}
         </style>
        </>
    )
}

export default SmallNav;