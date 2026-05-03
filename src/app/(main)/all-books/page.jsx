import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooksPage = async () => {    
    const res = await fetch('https://omnibooks-lending-library.vercel.app/bookData.json');
    const books = await res.json();
    // console.log(books);

    return (
        <div className='container mx-auto my-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-5'>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>


        </div>
    );
};

export default AllBooksPage;