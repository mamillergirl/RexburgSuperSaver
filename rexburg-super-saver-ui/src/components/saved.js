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
        <div className='cart-items'> 
        {cartItems.map((item, index) => (
          
          <div className="cart-item" key={item.id}>
            <div className='left'>
              <img
                  loading="lazy"
                  srcSet= {item.img}
                   className="cart-img"
                />
                   <img className='store-image' src={item.storeImage}/></div>
              <div className='right'>
                  <h3>{item.name}</h3>
                  <div className='prices'>
                  <p>{item.originalPrice}</p>
                  <p>{item.salePrice}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
           
          </div>
    

        ))}
        </div>
    

    </div>
    <Footer/>
    <style jsx>{`
        .shopping-cart {
          width: 80%;
          margin: 0 auto;
        }

        .cart-items {
          border: 1px solid black;
          border-radius: 10px;
          width: 90%;
        }
        .cart-item {
            
            display:flex;
            border-bottom: 1px solid black;
            width: 100%;
            
        }
        
        .right {
          display: flex;
          justify-content: space-between;
          align-content: space-between;
        }
        h3 {
          font-weight: 500;
        }

        .cart-total {
          text-align: right;
          margin-top: 20px;
          font-size: 18px;
        }
        .store-image {
          width: 200px;
          object-fit: contain;

        }
      `}</style>
    </>
  )}
export default Saved;
