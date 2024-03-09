import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket, removeToBasket } from '../../store/basketSlice';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { CiCircleRemove } from 'react-icons/ci';

const SingleCard = ({ img, title,  prevPrice, newPrice,isCart,isButton }) => {
  
  const[isHovered,setIsHovered]=useState(false);
  
  const dispatch=useDispatch();
  const handleEnter=()=>{
    setIsHovered(true);

  }
  const handleLeave=()=>{
    setIsHovered(false);
  }
  const handleClick=()=>{
    dispatch(addToBasket());
    dispatch(addToCart({
      img,       // Make sure to pass the correct properties
      title,
      prevPrice,
      newPrice, 
      isCart,
    
    }));

  }
  const handleRemove=()=>{
    dispatch(removeToBasket());
    dispatch(removeFromCart({
      img,
      title,
      prevPrice,
      newPrice,
      isCart
    }));
  }
  
  
  return (
    <div>
       
      <section className='scard'onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <div className="iscart" onClick={handleRemove}>
        {isCart && <CiCircleRemove />}

        </div>
      
        <Link to='/product/:id'>
        <img src={img} alt={title} className="scard-img" />
        </Link>
        
        
        <div className="scard-details">
          <h3 className="scard-title">{title}</h3>
          
          <section className="scard-price">
            <div className="sprice">
              <del>{prevPrice}</del> {newPrice}
            </div>
           
            
          </section>
          {isButton &&
          <button className='cart-btn' onClick={handleClick}>Add to Cart
          
          
          
          
          </button>}
        </div>
      </section>

     
      
    </div>
  )
}

export default SingleCard
