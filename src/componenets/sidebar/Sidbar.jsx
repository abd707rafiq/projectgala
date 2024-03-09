import React from 'react'
import Category from './Category'
import Brand from './Brand'
import Price from './Price'

const Sidbar = ({handleChange}) => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          
        </div>
        <Category handleChange={handleChange}/>
        <Brand handleChange={handleChange}/>
        <Price  handleChange={handleChange}/>
        
      </section>
    </div>
  )
}

export default Sidbar
