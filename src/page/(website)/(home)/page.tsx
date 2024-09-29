import React from 'react'
import { Link } from 'react-router-dom';
import FooterAds from '../../../compondents/FooterAds';
import { VscCalendar } from 'react-icons/vsc';

const HomePage = () => {
  return (

<main>
<section>
  <img src="https://img.pikbest.com/png-images/20210829/cute-funny-kitten-cat-face-head-banner-happy-halloween-costume-cartoon-flat-vector_6086476.png!bw700" alt="" className="w-full" />
</section>

  <section className="container max-w-screen-xl m-auto mt-16">
    <div className="flex justify-between items-center mb-4">
      <h2 className="fomt-semibold text-[40px]">New Products</h2>
      <Link to="./shop" className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 ">View all products</Link>
    </div>
    <div className="grid grid-cols-4 gap-8">
      <div>
        <div className="overflow-hidden">
          <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cute-de-thuong.jpg" alt className="hover:scale-125 duration-1000 " />
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
          <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-meo-khoc-thet.jpeg" alt="" className="hover:scale-125 duration-1000 " />
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
          <img src="https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-42.jpg" alt className="hover:scale-125 duration-1000 " />
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
          <img src="https://antimatter.vn/wp-content/uploads/2022/04/hinh-meo-khoc-tha-like.jpg" alt className="hover:scale-125 duration-1000 " />
        </div>
        <div className="bg-[#F5F5F5] p-4">
          <h3 className="font-semibold text-xl">Respira</h3>
          <p className="text-[#898989] text-base mt-1 mb-2">Outdoor bar table and stool</p>
          <p className="font-semibold text-xl text-red-600 mb-3">4.500.000đ</p>
          <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
        </div>
      </div>
    </div>
  </section>
  {/*End New Product*/}
  <section className="container max-w-screen-xl m-auto mt-16">
    <div className="flex justify-between items-center mb-4">
      <h2 className="fomt-semibold text-[40px]">Gallery</h2>
      <Link to="" className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 ">View all gallery</Link>
    </div>
    <div className="grid grid-cols-3 gap-8">
      <img src="https://inkythuatso.com/uploads/thumbnails/800/2023/02/meme-meo-kho-hieu-cute-1-03-12-57-40.jpg" alt="" />
      <img src="https://haycafe.vn/wp-content/uploads/2022/03/Anh-meo-bua-co-gang-mim-cuoi.jpg" alt="" />
      <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/06/hinh-meme-meo-dap-mat-na.jpg" alt="" />
      <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-meo-bua-nhe-rang-hai-huoc.jpg" alt="" />
      <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/06/hinh-meme-meo-luom.jpg" alt="" />
      <img src="https://img5.thuthuatphanmem.vn/uploads/2021/09/04/anh-che-meo-bua_114722175.jpg" alt="" />
    </div>
  </section>
  {/*End Gallery*/}
  <section className="container max-w-screen-xl m-auto mt-16">
    <div className="flex justify-between items-center mb-4">
      <h2 className="fomt-semibold text-[40px]">News</h2>
      <Link to="" className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 ">View all news</Link>
    </div>
    <div className="grid grid-cols-4 gap-8">
      <div>
        <div>
          <img src="https://img5.thuthuatphanmem.vn/uploads/2021/09/04/anh-meo-le-luoi-hai-huoc_114727780.jpg" alt="" />
        </div>
        <div>
          <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1"><span className="material-symbols-outlined"><VscCalendar /> </span>24/04/2024</p>
          <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
          <Link to="" className="text-red-600 fomt-semibold text-base flex items-center">Xem chi tiết  ⮕<span className="material-symbols-outlined"></span></Link>
        </div>
      </div>
      <div>
        <div>
          <img src="https://qpet.vn/wp-content/uploads/2023/04/meme-meo-cam-dao.jpg" alt="" />
        </div>
        <div>
          <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1"><span className="material-symbols-outlined"><VscCalendar /></span>24/04/2024</p>
          <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
          <Link to="" className="text-red-600 fomt-semibold text-base flex items-center">Xem chi tiết  ⮕<span className="material-symbols-outlined"></span></Link>
        </div>
      </div>
      <div>
        <div>
          <img src="https://trinhvantuyen.com/wp-content/uploads/2022/05/meo-cuoi-kho-chap-tay-lay.jpg" alt="" />
        </div>
        <div>
          <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1"><span className="material-symbols-outlined"><VscCalendar /></span>24/04/2024</p>
          <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
          <Link to="" className="text-red-600 fomt-semibold text-base flex items-center">Xem chi tiết  ⮕<span className="material-symbols-outlined"></span></Link>
        </div>
      </div>
      <div>
        <div>
          <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/04/meme-con-meo-cam-phong-lon.jpg" alt="" />
        </div>
        <div>
          <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1"><span className="material-symbols-outlined"><VscCalendar /> </span>24/04/2024</p>
          <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
          <Link to="" className="text-red-600 fomt-semibold text-base flex items-center">Xem chi tiết  ⮕ <span className="material-symbols-outlined"></span></Link>
        </div>
      </div>
    </div>
  </section>
  {/*End News*/}
 <FooterAds/>
</main>

  )
}

export default HomePage;
