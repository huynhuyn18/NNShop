import React from 'react';

const FooterAds = () => {
  return (
    <section className="bg-[#FFF7ED] py-16 w-full h-auto">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex gap-5 items-center">
          <img src="cup.svg" alt="Quality" />
          <div>
            <h3 className="font-semibold text-xl">High Quality</h3>
            <p className="text-[#898989]">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src="co gai.png" alt="Support" />
          <div>
            <h3 className="font-semibold text-xl">24 / 7 Support</h3>
            <p className="text-[#898989]">Dedicated support</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src="dau v.png" alt="Protection" />
          <div>
            <h3 className="font-semibold text-xl">Warranty Protection</h3>
            <p className="text-[#898989]">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src="hop gui.png" alt="Shipping" />
          <div>
            <h3 className="font-semibold text-xl">Free Shipping</h3>
            <p className="text-[#898989]">Order over 150 $</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterAds;