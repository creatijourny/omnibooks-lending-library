import Link from 'next/link';
import React from 'react';

const Sidebar = ({categories, activeId}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center border border-b shadow py-1 mb-4 text-linear-to-bl bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent'>Categories</h1>
        <ul className="flex flex-col gap-4 mt-6">
          {
          categories.map(category => {
            return <li key={category.id} className= {`${activeId === category.id && "bg-green-200"} p-2 rounded-md text-xl font-bold text-center`}>
            <Link href={'/category/${category.id}'} className='block'>{category.name}</Link>
            </li>
          })
        }
        </ul>
        </div>
    );
};

export default Sidebar;