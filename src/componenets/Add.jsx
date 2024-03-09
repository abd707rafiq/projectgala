import React from 'react'
import "./Add.css"
import img from "../images/Free-Mockup-Scene.png"
const Add = ({isHomePage,className}) => {
    return (
        <div>
            <div className={`add ${isHomePage ? 'home-add' : ''} ${className}`}>
                <div className="add-v">
                    <h3>Asus Zenbook Duo</h3>
                    <h2>The Laptop<br/> Of Tomorrow</h2>
                    <button>Shop Pre Order</button>
                    <img src={img} alt='img'/>
                </div>
               
            </div>
        </div>
    )
}

export default Add
