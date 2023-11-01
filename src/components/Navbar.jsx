import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-orange-600 text-4xl font-bold cursor-pointer'>
          MFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
          {user?.email && (
            <button
              onClick={toggleSidebar}
              className='bg-orange-600 px-4 py-2 rounded cursor-pointer text-white'
            >
              Open Sidebar
            </button>
          )}
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

      {isSidebarOpen && (
        <div className='sidebar'>
          {/* Sidebar content */}
          <ul>
          <li className='py-2 hover:bg-orange-500'>Option 1</li>
            <li className='py-2 hover:bg-orange-500'>Option 2</li>
            <li className='py-2 hover:bg-orange-500'>Option 3</li>
            {/* Add more sidebar items */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
