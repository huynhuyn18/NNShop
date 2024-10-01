import React from 'react'
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
   <main>
  <section className="container max-w-screen-xl m-auto">
    <h1 className="font-semibold text-[40px] mt-16 mb-8">Billing details</h1>
    <div className="grid grid-cols-2 gap-8 mb-16">
      <div>
        <form action=''>
          <div className="grid grid-cols-2 gap-32">
            <div>
              <label htmlFor="Tên" className="font-medium mb-2">First Name</label>
              <input type="text" name="firstname" className="border border-solid border-neutral-300 block w-full outline-none p-2 mt-2" />
            </div>
            <div>
              <label htmlFor="Họ" className="font-medium mb-2"> Last Name</label>
              <input type="text" name="lastname" className="border border-solid border-neutral-300 block w-full outline-none p-2 mt-2" />
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="company" className="font-medium">Tên công ty (Tùy chọn)</label>
            <input type="text" name="company" className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2" />
          </div>
          <div className="mt-8">
            <label htmlFor="country" className="font-medium">Quốc gia/Khu vực </label>
            <div className="p-2 border border-solid border-neutral-300 mt-2">
              <select name="country" id className="block w-full  ">
                <option value className="hidden">Choose Your country</option>
                <option value="vietnam">Viet Nam</option>
                <option value="america">America</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="street-address" className="font-medium">Địa chỉ đường</label>
            <input type="text" name="street-address" className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2" />
          </div>
          <div className="mt-8">
            <label htmlFor="town-city" className="font-medium">Thị trấn/Thành phố</label>
            <input type="text" name="town-city" className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2" />
          </div>
          <div className="mt-8">
            <label htmlFor="province" className="font-medium">Tỉnh</label>
            <div className="p-2 border border-solid border-neutral-300 mt-2">
              <select name="province" id="" className="block w-full  ">
                <option value="" className="hidden">Choose Your Province</option>
                <option value="vietnam">Thai Bình</option>
                <option value="america">Hà Nội</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="zip-code" className="font-medium">ZIP code</label>
            <input type="text" name="zip-code" className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2" />
          </div>
          <div className="mt-8">
            <label htmlFor="phone" className="font-medium">Số điện thoại</label>
            <input type="text" name="phone" className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2" />
          </div>
          <div className="mt-8">
            <label htmlFor="email" className="font-medium">Email </label>
            <input type="text" name="email" className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2" />
          </div>
        </form>
      </div>
      {/* End form */}
      <div>
        <p className="*:font-semibold *:text-2xl flex justify-between">
          <span>Product</span>
          <span>Subtotal</span>
        </p>
        <p className="flex justify-between mt-4">
          <span className="text-neutral-500">Asgaard sofa <strong className="font-medium text-black">X1</strong></span>
          <span className="font-medium">25.000.000đ</span>
        </p>
        <p className="flex justify-between mt-4">
          <span>Subtotal</span>
          <span className="font-medium">25.000.000đ</span>
        </p>
        <p className="flex justify-between mt-4">
          <span>Total</span>
          <span className="font-bold text-xl text-[#B88E2F">25.000.000đ</span>
        </p>
        <hr className="my-8 border-[#A3A3A3]" />
        <div>
          <div>
            <input type="radio" name=" payment-method" id />
            <span className="font-medium ml-2">Direct Bank Transfer</span>
          </div>
          <p className="text-[#A3A3A3 mt-3]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <div className="my-4">
            <input type="radio" name=" payment-method" id />
            <span className="font-medium ml-2 text-[#A3A3A3]">ATM Bank Transfer</span>
          </div>
          <div>
            <input type="radio" name=" payment-method" id />
            <span className="font-medium ml-2 text-[#A3A3A3]">Cash On Delivery</span>
          </div>
        </div>
        {/* end payment method*/}
        <p className="text-[#262626]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.</p>
        <div className="text-center mt-8">
          <Link to="" className="border border-solid border-yellow-500 text-yellow-500  inline-block text-center py-2 px-24 hover:bg-yellow-600 hover:text-white">Place order</Link>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default PaymentPage;
