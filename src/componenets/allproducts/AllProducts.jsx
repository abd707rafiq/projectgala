import React from 'react'
import "./AllProducts.css"
import SingleCard from '../sidebar/SingleCard'
import data from "./data1"


const AllProducts = ({products,isProductPage}) => {
  return (
    <>
    <h2 className={isProductPage ? 'product-page-p' : 'all-p'}>Featured Products</h2>
    <div className={isProductPage ? 'product-page-container' : 'scard-container'}>
      
      {products.map((product,id)=>(
        <SingleCard
        key={product.title} // Make sure to use a unique key
        img={product.img}
        title={product.title}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
        className={isProductPage ? 'product-grid-item' : 'home-grid-item'}
       isButton={true}
        
      />

      )

      )}
       
      
    </div>
    
    
    </>
    
  )
}

export default AllProducts
