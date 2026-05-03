import React from 'react';
import Marquee from 'react-fast-marquee';

const books = [
  {
    "id": 1,
    "title": "The Quantum Code: Unlocking Reality"
  },
  {
    "id": 2,
    "title": "Echoes of the Lost City"
  },
  {
    "id": 3,
    "title": "AI Frontiers: The Next Digital Revolution"
  },
  {
    "id": 4,
    "title": "The Time Traveler’s Algorithm"
  },
  {
    "id": 5,
    "title": "Secrets of the Cosmic Ocean"
  }
]

const NewArrivals = () => {
    return (
        <div className="container mx-auto flex justify-between gap-4 items-center bg-[#0F172A] text-[#E2E8F0] text-lg p-2 mt-5">
            <button className='btn px-5 py-1 border-0 bg-red-500 text-xl text-white'>New Arrivals</button>
            <Marquee pauseOnHover={true}>
                {books.map(n=> 
                    <span key={n.id} style={{ marginRight: "40px" }}>{n.title}</span>
                )}
                <p className='mx-10 text-orange-300'>Special Discount on Memberships...</p>
            </Marquee>
        </div>
    );
};

export default NewArrivals;