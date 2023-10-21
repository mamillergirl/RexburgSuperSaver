// Cart.js
import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';



function Saved() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('items')) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);

    // Update local storage when removing an item
    localStorage.setItem('items', JSON.stringify(updatedCart));
  };

  return (
    <>
    <Header/>
    
    <div className="cart">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Original Price</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>

        {cartItems.map((item, index) => (
          <tr key={item.id}>
            <td>
            {item.name} 
            </td>
          
            <td>
              {item.originalPrice} 
              </td> 
              <td>{item.salePrice} </td>
              <td>
            <img
                  loading="lazy"
                  srcSet= {item.img}
                   className="img"
                />
                </td>
          
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </tr>
        ))}
    


      </tbody>
      </table>

    </div>
    <Footer/>
    <style jsx>{`
        .shopping-cart {
          width: 80%;
          margin: 0 auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #f2f2f2;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .product-image {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }

        .cart-total {
          text-align: right;
          margin-top: 20px;
          font-size: 18px;
        }
      `}</style>
    </>
  )}
export default Saved;
