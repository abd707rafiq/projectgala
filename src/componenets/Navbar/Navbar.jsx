import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import './nav.css'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBasket3 } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeToBasket } from '../../store/basketSlice'
import { removeFromCart } from '../../store/cartSlice'

const Navbar = () => {

    const [animate, setAnimate] = useState(false);
    const basketCount = useSelector(state => state.basket);
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const handleEnter = () => {
        setIsHovered(true);
    }
    const handleLeave = () => {
        setIsHovered(false);
    }
    const handleRemove = () => {
        if(basketCount>0){
            dispatch(removeToBasket());
            

        }
       
    }
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);

        }, 100)

    });
    return (
        <div >
            <div className={`navbar1 ${animate ? 'animate' : ''}`}>
                <div className="left1">
                    <h3 >World's Fastest Online Shopping Destination</h3>
                </div>
                <div className="right1">
                    <div className="left1-icon1">
                        <div className="icon">
                            < BsTelephone />
                        </div>
                        <span className='num'>088-888-8888</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="left1-icon2">
                        <div className="icon">
                            <AiOutlineMail />
                        </div>
                        <span className='mail'>abd@dhajkd</span>
                    </div>

                </div>
            </div>
            <div className="navbar2">
                <div className="content">
                    <ul className='left2'>
                        <Link to="/">
                            <li className='logo'><span>Shop <br /> <b>Digital</b></span></li>
                        </Link>
                        <div className="vertical-line"></div>
                        <Link to='/'><li>Home</li></Link>
                       <Link to="/about"> <li>About</li></Link>
                       <Link to='/blog'> <li>Blog</li></Link> 
                        <Link to="/products/:id"><li>Shop</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>

                    <ul className='right2'>
                        <li className='right-icons'><BsPerson /><span ><Link to='/signin'>Login</Link></span></li>
                        <div className="vertical-line"></div>
                        <li className='right-icons'><AiOutlineSearch /> <span>Search</span></li>
                        <div className="vertical-line"></div>
                        <div onMouseEnter={handleEnter}  >
                            <li className='right-icons' ><BsBasket3 /><span>Basket {basketCount}

                                {isHovered && (
                                    <div className="cart-tooltip" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                                        <p className='cart-p'>Total items in cart: {basketCount}</p>
                                        <button className="tooltip-btn1" onClick={handleRemove}>Remove item</button>
                                        <Link to='/cart'>
                                            <button className="tooltip-btn2">View Cart</button>

                                        </Link>
                                    </div>
                                )}


                            </span></li>


                        </div>

                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Navbar
