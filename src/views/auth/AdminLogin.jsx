import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';


const Login = () => {
    const dispatch = useDispatch();

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
        dispatch(admin_login(state))
    }

    return (
        <div className="relative min-w-screen bg-black min-h-screen min-w-screen flex items-center justify-center">
          <div className='w-[350px] text-white p-2'>
          <img className ='w-full h-full' src= "http://localhost:3000/images/logo2.png" alt="image" />
          <div className='w-[100%] bg-slate-700 h-[2px] '></div>
          <br />
                <h2 className='text-xl mb-3 font-bold'>Admin Panel</h2>               
    <form onSubmit={submit}>
         
        <div className='flex flex-col w-full gap-1 mb-3 font-semibold'>
            <label htmlFor="email">Email</label>
            <input onChange={inputHandle} value={state.email}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="email" name='email' placeholder='Email' id='email' required />

        </div>

        <div className='flex flex-col w-full gap-1 mb-3 font-semibold'>
            <label htmlFor="password">Password</label>
            <input onChange={inputHandle} value={state.password}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type="password" name='password' placeholder='Password' id='password' required />
        </div>
 

        <button className='bg-[#befe2c] w-full drop-shadow-xl text-black rounded-md px-7 py-2 mb-3'>Sign In</button>
    </form>
 
            </div>
            </div>  
            

    );
};

export default Login;


