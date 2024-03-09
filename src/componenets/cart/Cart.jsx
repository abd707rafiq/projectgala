import React from 'react';
import { useSelector } from 'react-redux';
import SingleCard from '../sidebar/SingleCard';
import "./Cart.css"

// Import statements...


const Cart = () => {
    const cartProducts = useSelector(state => state.cart);
  
    return (
      <div >
        <h2>Your Cart</h2>
       <div className="cart">
       
       {cartProducts.map(product => (
        

            
            <SingleCard
              key={product.title} // Make sure to use a unique key
              img={product.img}
              title={product.title}
              prevPrice={product.prevPrice}
              newPrice={product.newPrice}
             isCart={true}
             isButton={false}
              
            />
            
          ))}



       </div>
        
        
        
      </div>
    );
  };
  
  export default Cart;
  