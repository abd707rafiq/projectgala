import React from 'react'
import Input from './Input'

const Price = ({handleChange}) => {
  return (
    
        <div className='margin'>
      <h2 className="sidebar-title">Price</h2>

<div>
    <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
    </label>
    <Input
         handleChange={handleChange}
        value="50"
        title="0-50"
        name="test"
    />
    <Input
         handleChange={handleChange}
        value="150"
        title="50-150"
        name="test"
    />
    <Input
        handleChange={handleChange}
        value="200"
        title="150-200"
        name="test"
    />
    <Input
        handleChange={handleChange}
       value="250"
       title="200-250"
       name="test"
   />
    
</div>
    </div>
      
    
  )
}

export default Price
