import Sidebar from '@/components/homepage/Sidebar';
import React from 'react';

async function getCategories (){
  const res = await fetch('https://omnibooks-lending-library.vercel.app/category.json');  
  const data = await res.json();
  return data;
}
async function getBookByCategoryId (category_id){  
  const res = await fetch("https://omnibooks-lending-library.vercel.app/bookData.json");

  const data = await res.json();
  const filteredBooks = data.filter(
    (book) => book.category_id === Number(category_id)
  );  
  return filteredBooks;
}

const BooksByCategory = async ({params}) => {
   const {id} = await params;
   console.log(id, "paramsRes")

    const categories = await getCategories(); 
  const book = await getBookByCategoryId("1");

    return (
        <div className="container mx-auto grid grid-cols-12 gap-8 my-[60px]">
      <div className="col-span-3">
        <Sidebar categories={categories} activeId={null}/>
      </div>

      <div className="col-span-9">
        <h1 className='text-5xl font-bold text-center bg-[#FFFFFF] shadow-sm text-linear-to-bl bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent'>All Books</h1>
        <div className="space-y-4">
          {
          book.map(b => {
            return <div key={b.id} className="p-6 rounded-md border">
              {b.title}
            </div>
          })
        }
        </div>
        

        {/* <AllBooksPage /> */}
      </div>
    
    </div>
    );
};

export default BooksByCategory;