import React from 'react'
import Main from '../../componenets/Home/Main'
import AllProducts from '../../componenets/allproducts/AllProducts'
import "./Home.css"
import data from "../../componenets/allproducts/data1"
import Add from '../../componenets/Add'
import Blog from '../Blog'

const Home = () => {
  

 
  return (
    <div>
      <Main/>
      <div className="all-products-container">
        <AllProducts products={data} isProductPage={true}/>
      </div>
      <Add/>
      <Blog isHomePage={true}/>
      <div className='ishome'>
      <Add isHomePage={true} className='custom1'/>
      <Add isHomePage={true} className='custom2'/>

      </div>
      
    </div>
  )
}

export default Home
