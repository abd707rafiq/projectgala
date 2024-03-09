import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { signInFail,signInStart,signInSuccess } from '../store/userslice'
import axios from 'axios'
import Hello from '../componenets/Hello'
import './SignIn.css'



const SignIn = () => {
  const [formdata,setFormData]=useState([]);
  const { loading, error } = useSelector((state) => state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({
      ...formdata,
     [e.target.id]:e.target.value

    });
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res=await axios.post("http://localhost:3000/signin",formdata,{
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data=res.data;
      console.log(data);
      if(data.success===false){
        dispatch(signInFail(data.message));
        
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');

    }catch(e){
      dispatch(signInFail(e.message));
    }

  }

  return (
    <div className='main'>
    <h1 className='main-1'>Sign In</h1>
    <form onSubmit={handleSubmit} className='main-3'>
      <input
        type='email'
        placeholder='email'
        className='main-4'
        id='email'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        className='main-4'
        id='password'
       onChange={handleChange}
      />

      <button
      disabled={loading}
        
        className='main-5'
      >
        {loading ? 'Loading...':'SignIN'}
      </button>
    <Hello/>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>
      <Link to={'/sign-up'}>
        <span className='text-blue-700'>Sign up</span>
      </Link>
    </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}
    
    
  </div>
  )
}

export default SignIn
