import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { User } from 'react-feather';

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

  const logoutFromSidebar = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToMovieSection = (section) => {
    navigate(`/movies/${section}`);
    toggleSidebar(); // Close the sidebar after navigation
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
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={toggleSidebar}
            className='relative inline-block group'
          >
            <User className='mr-2' size={24} />
            <span className='cursor-pointer'></span>
            {isSidebarOpen && (
              <div className='fixed top-0 right-0 h-screen bg-gray-900 text-white w-64'>
                <div className='p-4'>
                  <div className='mb-4'>
                    <div className='py-2'>{user?.email}</div>
                  </div>
                  <hr />
                  <div className='mb-4'>
                    <div className='py-2 text-lg font-semibold'>Movies</div>
                    <div className='py-2 hover:bg-orange-500'>Upcoming</div>
                    <div className='py-2 hover:bg-orange-500'>Trending</div>
                    <div className='py-2 hover:bg-orange-500'>BlockBuster</div>
                    <div className='py-2 hover:bg-orange-500'>Top Rated</div>
                    <div className='py-2 hover:bg-orange-500'>Horror</div>
                  </div>
                  <hr />
                  <div className='mt-40'>
                    <div className='py-2 hover:bg-orange-500'>
                      <button onClick={logoutFromSidebar}>Logout</button>
                    </div>
                    <div className='py-2 hover:bg-orange-500'>
                      <button onClick={toggleSidebar}>Close</button>
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