import Link from 'next/link';
import React from 'react';




const Banner = () => {
  return (
    <div className='container mx-auto items-center'>
      <div className='flex justify-center items-center'>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-linear-to-bl bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent max-w-2xl my-5">
          Find Your Next Read
        </h1>
      </div>
      <div className="bg-[url('https://i.ibb.co.com/wjvg3pQ/hero-image.png')] h-[60vh] bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
        {/* Overlay */}

        <div className="w-full h-full rounded-lg bg-black/50 flex flex-col items-top text-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="text-4xl md:text-5xl font-bold my-5 max-w-xl text-white">
              Books Today,<br /><span className='text-orange-500'>Brighter</span> Tomorrow.
            </p>
          </div>
          <div className="my-8">
        <Link href="#">
          <button className="text-white text-lg font-semibold bg-green-500 px-10 py-2 rounded-full">Browse Now</button>
        </Link>
      </div>
        </div>
        
      </div>
      
    </div>
  );
};
export default Banner;


// bookdata api: https://omnibooks-lending-library.vercel.app/bookData.json

// https://omnibooks-lending-library.vercel.app/category.json