import React from 'react'

import Input from './Input'

const Brand = ({handleChange}) => {
  return (
    <div className='margin'>
      <h2 className="sidebar-title">Brand</h2>

<div>
    <label className="sidebar-label-container">
        <input onChange={handleChange}
        type="radio" value="" name="test" />
        <span className="checkmark"></span>All
    </label>
    <Input
        handleChange={handleChange}
        value="apple"
        title="Apple"
        name="test1"
    />
    <Input
        handleChange={handleChange}
        value="samsung"
        title="Samsung"
        name="test1"
    />
    <Input
       handleChange={handleChange}
        value="lenovo"
        title="Lenovo"
        name="test1"
    />
    <Input
        handleChange={handleChange}
        value="audionic"
        title="Audionic"
        name="test1"
    />
</div>
    </div>
  )
}

export default Brand
