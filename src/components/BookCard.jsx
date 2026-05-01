import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    const {id, title, author, image_url} = book;
    return (
        <div>
            <div className="relative w-full aspect-square">
                <Image 
                src={image_url}
                alt={title}                
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-lg'/>                
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xl font-semibold mb-3'>{title}</h3>
                <Link href={`/all-books/${book.id}`}>
                <button className='px-5 py-2 rounded-3xl bg-gradient-to-r from-fuchsia-600 to-green-500 text-white mb-6'>Show Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;