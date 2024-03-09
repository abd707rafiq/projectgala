import React, { useState, useEffect } from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
const Card = ({ title, image, description, buttonLabel, id }) => {
 

  const[isVisible,setIsVisible]=useState(false);
  const [hasAnimated,setHasAnimated]=useState(false);

  const cardClassName=`card card-${id}   ${isVisible ? 'visible': ''}`;

  useEffect(()=>{
    const handleScroll=()=>{
      if(!hasAnimated){
        const cardElement=document.querySelector(`.card-${id}`);
        if(cardElement){
          const rect=cardElement.getBoundingClientRect();
          const isVisible=rect.top<=window.innerHeight*0.8;
          if(isVisible){
            setIsVisible(true);
            setHasAnimated(true);
          }
        }
      }
    }


    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return ()=>{
      window.removeEventListener('scroll',handleScroll);

    };



  },[id]);

  return (
    <div>
      <div className={cardClassName}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="/products/:id">
        <button >{buttonLabel}</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Card;


