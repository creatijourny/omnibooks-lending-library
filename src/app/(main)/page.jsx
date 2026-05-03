import Image from "next/image";
import AllBooksPage from "./all-books/page";
import Sidebar from "@/components/homepage/Sidebar";

async function getCategories (){
  const res = await fetch('https://omnibooks-lending-library.vercel.app/category.json');  
  const data = await res.json();
  return data;
}
async function getBooksByCategory (){  
  const res = await fetch('https://omnibooks-lending-library.vercel.app/bookData.json');

  const data = await res.json();
  
  return data;

}

export default async function Home() {
  const categories = await getCategories();
  // console.log(categories);

  const category = await getBooksByCategory();
  console.log(category);
  
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className="col-span-2">
        <Sidebar categories={categories} activeId={2}/>
      </div>

      <div className="col-span-10">
        <h1 className='text-5xl font-bold text-center bg-[#FFFFFF] shadow-sm text-linear-to-bl bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent'>All Books</h1>
        <AllBooksPage />
      </div>
    
    </div>
  );
}
