import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://wallpapercave.com/dwp1x/wp2943179.jpg'
          alt='/'
        />
<div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[400px] h-[500px] mx-auto bg-black/50 text-white-100 rounded-xl shadow-orange-right shadow-orange-bottom shadow-orange-top shadow-orange-left'>
            <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold text-yellow-600'><center>WELCOME :)</center></h1>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-white-700 rouded text-black'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-white-700 rouded text-black'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-orange-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p>
                    <input className='mr-4' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-orange-600 px-1'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/signup' className="text-gray-400">  Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
