import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import Hello from '../componenets/Hello';
const SignUp = () => {
  const[formdata,setFormdata]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.id]:e.target.value
    });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/signup", formdata, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = res.data;
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
      } else {
        setLoading(false);
        setError(null);
        navigate('/sign-In');
      }
    } catch (error) {
      setLoading(false);
      setError(error.message); // Fix typo in this line: `meassage` to `message`
    }
  };

  
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-semibold my-5'>SignUp</h1>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input type='text' placeholder='username' className='border p-3 rounded-lg ' id='username' 
      
      onChange={handleChange}
      />
      <input  type='text' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
      <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
      <button disabled={loading} 
      className='bg-slate-700 text-white p-3 rounded-lg 
      uppercase hover:opacity-95 disabled:opacity-80'
      
      
      
      >{loading ? 'Loading...' : 'Sign Up'}</button>
      <Hello/>
   
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/sign-In'}>
        <span className='text-blue-700'>Sign in</span>
        </Link>
        
      </div>


      {error && <p className='text-red-500 mt-5'>{error}</p>}
    
    </div>
  )
}

export default SignUp
