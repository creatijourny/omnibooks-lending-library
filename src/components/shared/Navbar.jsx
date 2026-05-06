'use client';
import React, { useState } from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="navbar container mx-auto flex justify-between bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                        <li><NavLink href={'/'}>Home</NavLink></li>
                        <li><NavLink href={'/all-books'}>All Books</NavLink></li>
                        <li><NavLink href={'/myprofile'}>My Profile</NavLink></li>
                    </ul>
                </div>
                <h3 className="font-bold text-4xl"><span className="text-orange-600">Omni</span>Books</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/all-books'}>All Books</NavLink></li>
                    <li><NavLink href={'/myprofile'}>My Profile</NavLink></li>
                </ul>
            </div>
            {isPending ? (<div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>) : user ? (<div className='flex gap-2 items-center'>
                <h2 className='font-semibold text-gray-900'>{user.name}</h2>
                <button className='bg-purple-600 text-white cursor-pointer rounded px-3 py-1.5' onClick={async () =>
                    await authClient.signOut()}>Logout</button>
            </div>) : (
                <div className='flex gap-1 px-2'>
                    <button className='bg-[#FFD814] text-[#000000] w-3/4 p-2 rounded font-semibold'>
                        <Link href={"/login"}>Sign in</Link>
                    </button>
                    <button className='bg-purple-600 text-white w-3/4 p-2 rounded'>
                        <Link href={"/register"}>Register</Link>
                    </button>
                </div>

            )}


        </div>

    );
};

export default Navbar;