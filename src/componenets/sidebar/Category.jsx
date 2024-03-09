import React from 'react'
import "./Category.css"
import Input from './Input'


const Category = ({handleChange}) => {

    
    return (
        <div className='margin'>

            <input
                className="search-input"
                type="text"


                placeholder="Enter your search shoes."
            />
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <Input
                     handleChange={handleChange}
                    value="Graphiccard"
                    title="Graphic card"
                    name="test"
                />
                <Input
                     handleChange={handleChange}
                    value="watch"
                    title="Watch"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="phone"
                    title="Mobile"
                    name="test"
                />
                <Input
                     handleChange={handleChange}
                    value="sound"
                    title="Head Phones"
                    name="test"
                />
                <Input
                     handleChange={handleChange}
                    value="laptop"
                    title="Laptop"
                    name="test"
                />
            </div>
        </div>
    )
}

export default Category
