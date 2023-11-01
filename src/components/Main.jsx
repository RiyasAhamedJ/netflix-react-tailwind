import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  const stopVideo = () => {
    setIsVideoVisible(false);
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[600px] text-white relative'>
      <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
      <img
        className='w-full h-full object-cover'
        src='https://i0.wp.com/moviegalleri.net/wp-content/uploads/2023/06/Thalapathy-Vijay-LEO-Movie-First-Look-Poster-HD.jpg?ssl=1'
        alt={movie?.title}
      />
      {isVideoVisible && (
        <div className='absolute inset-0 w-full h-full'>
          <iframe
            title='Movie Trailer'
            className='w-full h-full'
            src='https://www.veed.io/embed/943b790f-9812-482f-922b-41e0d97f243e'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          />
        </div>
      )}
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button
            onClick={toggleVideo}
            className='border bg-gray-300 text-black border-gray-300 py-2 px-5'
          >
            Play
          </button>
          <button
            onClick={stopVideo}
            className='border bg-gray-300 border text-black border-gray-300 py-2 px-5 ml-4'
          >
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>Released: 2023</p>
        <p className='w-full md.max-w-[70%] lg.max-w-[50%] xl.max-w-[35%] text-gray-200'>
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
