import React from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white pt-16 pb-8 ">
  <div className="  max-w-screen-xl m-auto grid grid-cols-4 gap-8 mb-16">
    <div>
      <img src="logo.svg" alt="" className="mb-4" />
      <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
    </div>
    <div>
      <h3 className=" font-semibold text-xl mb-4"> Sitemap</h3>
      <ul>
        <li className="mb-4"><Link to="/">Home</Link></li>
        <li className="mb-4"><Link to="/Shop">Shop</Link></li>
        <li className="mb-4"><Link to="/About">About</Link></li>
        <li className="mb-4"><Link to="Contact">Contact</Link></li>
      </ul>
    </div>
    <div>
      <h3 className=" font-semibold text-xl mb-4"> Help</h3>
      <ul>
        <li className="mb-4"><Link to="">Payment Options</Link></li>
        <li className="mb-4"><Link to="">Returns</Link></li>
        <li><Link to="">Privacy Policies</Link></li>
      </ul>
    </div>
    <div>
      <h3 className=" font-semibold text-xl mb-4"> Location</h3>
      <ul>
        <li className="mb-4"><Link to="">support@euphoria.in</Link></li>
        <li className="mb-4"><Link to="">Ahmedabad Main Road</Link></li>
        <li><Link to="">Udaipur, India- 313002</Link></li>
      </ul>
    </div>
  </div>
  <hr />
  <p className="text-center mt-8">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
</footer>

  )
}

export default Footer
