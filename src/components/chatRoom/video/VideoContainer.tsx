import React from 'react';
import Header from '../Header';

const VideoContainer = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-[92vh]  bg-black">
        <p className="font-thin text-lg text-white">
          Your are not connected to the live server !
        </p>
      </main>
    </>
  );
};

export default VideoContainer;
