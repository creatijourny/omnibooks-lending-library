import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://omnibooks-lending-library.vercel.app/bookData.json');
    const books = await res.json();

    const book = books.find(b => b.id == id)
    console.log(book);
    // console.log(id);
   
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className="relative w-[80%] aspect-square mx-auto rounded-xl overflow-hidden">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover' />
            </div>
            <div className='w-[90%] my-10 p-8'>
                <h2 className='text-2xl font-bold mb-3'>Title: {book.title}</h2>
                <p className='text-lg font-semibold mb-3'>Author: {book.author}</p>
                <p className='text-lg mb-4'>Description: {book.description}</p>
                <p className='text-xl mb-3'>Available quantity: {book.available_quantity}</p>
                <div className='flex justify-start gap-6 mt-4'>
                    <button className='bg-blue-600 text-lg text-white rounded-lg px-7 py-4'>Borrow This Book</button>
                    <Link href={'/all-books'}>
                        <button className='bg-violet-950 border-purple-500 text-lg text-white rounded-lg px-7 py-4'>All Books</button>
                    </Link>
                </div>
            </div>
        </div>       
    );
};

export default BookDetailsPage;
