import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { User, LogOut } from 'react-feather';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logoutFromSidebar = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const sidebarStyle = {
    background: 'rgba(128, 128, 128, 1.0)',
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-orange-600 text-4xl font-bold cursor-pointer'>
          MFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className='flex items-center'>
          <Link to='/account'></Link>
          <button
            onClick={toggleSidebar}
            className='relative inline-block group'
          >
            <div className='relative'>
              <div className='rounded-full bg-yellow-600 p-2'>
                <User className='text-white' size={35} />
              </div>
            </div>
            <span style={{ color: 'orange' }}></span>
            {isSidebarOpen && (
              <div className='fixed top-0 right-0' style={sidebarStyle}>
                <div className='text-black w-64'>
                  <div className='p-4'>
                    <div className='mb-4 flex items-center'>
                      <User size={32} className='mr-2' />
                      <div className='py-4 text-center user-section'>{user?.email}</div>
                    </div>
                    <hr />
                    <div className='py-2 rounded-lg'>
                      <button
                        onClick={logoutFromSidebar}
                        style={{ cursor: 'pointer' }}
                        className='flex items-center text-black hover:bg-yellow-600 px-2 rounded p-2'
                      >
                        <LogOut className='mr-2' size={16} />
                        Log Out
                      </button>
                    </div>
                    <div className='py-2 rounded-lg'>
                      <button
                        onClick={toggleSidebar}
                        style={{ cursor: 'pointer' }}
                        className='flex items-center text-black hover:bg-gray-600 px-8 py-2 rounded p-2'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button
              className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;