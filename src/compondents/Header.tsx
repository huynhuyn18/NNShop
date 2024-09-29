import React from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from 'react-icons/vsc';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow">
      <section className="container mx-auto flex items-center justify-between py-4">
        <img src="logo.svg" alt="Logo" />
        <ul className="flex gap-8 font-medium text-xl">
          <li className="hover:text-amber-500"><Link to="/">Home</Link></li>
          <li className="hover:text-amber-500"><Link to="/shop">Shop</Link></li>
          <li className="hover:text-amber-500"><Link to="./about">About</Link></li>
          <li className="hover:text-amber-500"><Link to="./contact">Contact</Link></li>
        </ul>
        <div className="flex gap-4">
          <span className="material-symbols-outlined"><VscAccount /></span>
          <span className="material-symbols-outlined"><AiOutlineSearch /></span>
          <span className="material-symbols-outlined"><AiOutlineHeart /></span>
          <span className="material-symbols-outlined"><IoCartOutline /></span>
        </div>
      </section>
    </header>
  );
}

export default Header;