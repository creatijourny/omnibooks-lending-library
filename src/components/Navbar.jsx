"use client";
import { authClient } from "@/lib/auth-client";
// import { Button } from "@daisyui/react";


import Link from "next/link";
import NavLink from "./NavLink";



const Navbar = () => {
    const userData = authClient.useSession();
  const user = userData.data?.user;

  // const handleSignOut = async () => {
  //   await authClient.signOut();
  // }

    return (
       <div className='flex justify-between mt-6 bg-[#FFFFFF] shadow'>
            <nav className="flex justify-between items-center  py-3 container mx-auto">
        <div>          
          <h3 className="font-bold text-3xl"><span className="text-orange-600">Omni</span>Book</h3>
        </div>

        <ul className="flex items-center gap-5 text-lg">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-books"}>All Books</NavLink>
          </li>
          
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          
            <ul className="flex items-center  text-lg gap-5">
                <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
              
            </ul>
         

          
        </div>
      </nav>
        </div>
    );
};

export default Navbar;