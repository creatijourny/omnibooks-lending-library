import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    const {id, title, author, image_url} = book;
    
    return (
        <div>
            <div className="relative aspect-square border-0 shadow">
                <Image 
                src={image_url}
                alt={title}                
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='h-[300px] w-[250px] rounded-lg'/>                
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xl font-semibold mb-3'>{title}</h3>
                <Link href={`/all-books/${book.id}`}>
                <button className='inline-block cursor-pointer px-5 py-2 rounded-3xl bg-gradient-to-r from-[#0F2027] to-[#2C5363] text-white mb-6 hover:to-[#117ce0]'>Show Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;