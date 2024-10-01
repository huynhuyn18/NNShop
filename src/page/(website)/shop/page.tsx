import React from 'react'
import FooterAds from '../../../compondents/FooterAds'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <main>
      <section>
  <img src="Banner-home.svg" alt="" className="w-full" />
</section>
  <section className="container max-w-screen-xl m-auto grid grid-cols-12 gap-8 mt-16">
    <div className="col-span-3">
      <h2 className="font-semibold text-xl mb-4">Categories</h2>
      <ul>
        <li className="text-yellow-600 font-medium mb-2"><Link to="">Cfe Chair</Link></li>
        <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600"><Link to="">Sofa</Link></li>
        <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600"><Link to="">Lamp</Link></li>
        <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600"><Link to="">Carpet</Link></li>
        <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600"><Link to="">Cabinet</Link></li>
        <li className="font-medium text-[#737373]  hover:text-yellow-600"><Link to="">Tea table</Link></li>
      </ul>
    </div>
    {/*End Categories*/}
    <div className=" col-span-9 ">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <div className="overflow-hidden">
            <img src="https://3.pik.vn/2020cb482aa9-79bc-402c-a5ed-dcaa321f7ddd.png" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Syltherine</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
            <p className="font-semibold text-xl text-red-600 mb-3">2.500.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://st.quantrimang.com/photos/image/2022/09/13/Meo-khoc-20.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Leviosa</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
            <p className="font-semibold text-xl text-red-600 mb-3">1.800.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://blogchiasekienthuc.com/wp-content/uploads/2022/11/anh-meme-meo-hai-huoc-de-thuong-16.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Lolito</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Luxury big sofa</p>
            <p className="font-semibold text-xl text-red-600 mb-3">2.000.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://kynguyenlamdep.com/wp-content/uploads/2022/08/meme-meo-ciu-ciu.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Respira</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Outdoor bar table and stool</p>
            <p className="font-semibold text-xl text-red-600 mb-3">4.500.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://kynguyenlamdep.com/wp-content/uploads/2022/08/meme-meo-cho-mieng.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Syltherine</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
            <p className="font-semibold text-xl text-red-600 mb-3">2.500.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/anh-meo-che-anh-meo-bua-24-31-09-22-09.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Leviosa</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
            <p className="font-semibold text-xl text-red-600 mb-3">1.800.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cute-dang-yeu.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Lolito</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Luxury big sofa</p>
            <p className="font-semibold text-xl text-red-600 mb-3">2.000.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://devo.vn/wp-content/uploads/2023/01/xien-chet-ba-may-gio.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Respira</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Outdoor bar table and stool</p>
            <p className="font-semibold text-xl text-red-600 mb-3">4.500.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <img src="https://demoda.vn/wp-content/uploads/2022/01/anh-meo-de-thuong-1.jpg" alt="" className="hover:scale-125 duration-1000 " />
          </div>
          <div className="bg-[#F5F5F5] p-4">
            <h3 className="font-semibold text-xl">Syltherine</h3>
            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
            <p className="font-semibold text-xl text-red-600 mb-3">2.500.000đ</p>
            <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
          </div>
        </div>
      </div>
      {/*End product*/}
      <div className="mt-8">
        <Link to="" className="mr-3 py-2 px-4 bg-yellow-600 inline-block text-white font-bold rounded-md">1</Link>
        <Link to="" className="mr-3 py-2 px-4 bg-[#A3A3A3] inline-block text-white font-bold rounded-md">2</Link>
        <Link to="" className="mr-3 py-2 px-4 bg-[#A3A3A3] inline-block text-white font-bold rounded-md">3</Link>
        <Link to="" className="py-3 px-4 bg-[#A3A3A3] inline-block text-white font-bold rounded-md">Next</Link>
      </div>
      {/*End Pagination*/}
    </div>
  </section>
 
  <FooterAds/>
</main>
  )
}

export default Shop;
