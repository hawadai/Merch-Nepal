import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {

    const [state, setState] = useState({ 
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <div class="relative min-w-screen bg-gray-50 min-h-screen min-w-screen flex items-center justify-center">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>



          <div className='w-[350px] text-[#000000] p-2'>
          <img className ='w-full h-full' src= "http://localhost:3000/images/logo.png" alt="image" />
          <div className='w-[100%] bg-slate-700 h-[2px] '></div>
          <br />
                <h2 className='text-xl mb-3 font-bold'>Welcome!</h2>
                <p className='text-sm mb-3 font-medium font-semibold underline'>Sign In with your account</p>

    <form onSubmit={submit}>
         
        <div className='flex flex-col w-full gap-1 mb-3 font-semibold'>
            <label htmlFor="email">Email</label>
            <input onChange={inputHandle} value={state.email}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="email" name='email' placeholder='Email' id='email' required />

        </div>

        <div className='flex flex-col w-full gap-1 mb-3 font-semibold'>
            <label htmlFor="password">Password</label>
            <input onChange={inputHandle} value={state.password}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="password" name='password' placeholder='Password' id='password' required />
        </div>
 

        <button className='bg-[#2b5f53] w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>

        <div className='flex items-center mb-3 gap-3 justify-center'>
            <p>Don't Have an account ? <Link className='font-semibold hover:underline decoration-2' to="/register">Sign Up</Link> </p> 
        </div>

        <div className='w-full flex justify-center items-center mb-3'>
            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            <div className='w-[10%] flex justify-center items-center'>
                <span className='pb-1'>Or</span>
            </div>
            <div className='w-[45%] bg-slate-700 h-[1px] '></div>
        </div>

        <div className='flex justify-center items-center gap-3'>
            <div className='w-[135px] h-[35px] flex rounded-lg bg-[#ffd553] shadow-md hover:bg-[#4285f4] shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden'>
            <span><FaGoogle /></span>
             </div>

             <div className='w-[135px] h-[35px] flex rounded-lg bg-[#83b3ff] shadow-md hover:bg-[#4285f4] shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden'>
            <span><FaFacebook /></span>
             </div>

        </div>
        


    </form>
 
            </div>
            </div>  
            

    );
};

export default Login;