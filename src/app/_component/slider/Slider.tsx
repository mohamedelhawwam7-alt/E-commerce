"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import slide1 from "../../../../public/images/imgslider.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Headset, RotateCcw, Shield, VanIcon } from "lucide-react";

export default function MainSlider() {
  return (
    <div className="bg-gray-50 w-full">

      <div className="w-full mb-8">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-72 sm:h-80 md:h-96 overflow-hidden shadow-lg"
        >
 
          <SwiperSlide className="relative w-full h-full group">
            <Image
              src={slide1}
              alt="Slider Banner"
              className="w-full h-full object-cover object-center"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-r from-emerald-700/95 via-emerald-600/75 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-14 text-white space-y-2.5 sm:space-y-3 max-w-lg md:max-w-xl">
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight opacity-0 translate-y-6 transition-all duration-700 delay-100 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Fresh Products Delivered to your Door
              </h2>
              <p className="text-emerald-50 text-xs sm:text-sm md:text-base opacity-90% opacity-0 translate-y-6 transition-all duration-700 delay-200 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Get 20% off your first order
              </p>

              <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2 opacity-0 translate-y-6 transition-all duration-700 delay-300 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                <button type="button" className="h-9 sm:h-11 px-4 sm:px-6 text-xs sm:text-sm rounded-lg bg-white text-emerald-700 font-semibold border-2 border-transparent shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Shop Now
                </button>

                <button type="button" className="h-9 sm:h-11 px-4 sm:px-6 text-xs sm:text-sm rounded-lg bg-transparent text-white font-medium border-2 border-white/80 hover:bg-white/15 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  View Deals
                </button>
              </div>
            </div>
          </SwiperSlide>

      
          <SwiperSlide className="relative w-full h-full group">
            <Image
              src={slide1}
              alt="Slider Banner"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-r from-emerald-800/95 via-emerald-600/75 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-14 text-white space-y-2.5 sm:space-y-3 max-w-lg md:max-w-xl">
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight opacity-0 translate-y-6 transition-all duration-700 delay-100 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Premium Quality Guaranteed
              </h2>
              <p className="text-emerald-50 text-xs sm:text-sm md:text-base opacity-90% opacity-0 translate-y-6 transition-all duration-700 delay-200 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Fresh from farm to your table
              </p>

              <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2 opacity-0 translate-y-6 transition-all duration-700 delay-300 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                <button type="button" className="h-9 sm:h-11 px-4 sm:px-6 text-xs sm:text-sm rounded-lg bg-white text-emerald-700 font-semibold border-2 border-transparent shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Shop Now
                </button>

                <button type="button" className="h-9 sm:h-11 px-4 sm:px-6 text-xs sm:text-sm rounded-lg bg-transparent text-white font-medium border-2 border-white/80 hover:bg-white/15 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

  
          <SwiperSlide className="relative w-full h-full group">
            <Image
              src={slide1}
              alt="Slider Banner"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-r from-emerald-900/95 via-emerald-700/75 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-14 text-white space-y-2.5 sm:space-y-3 max-w-lg md:max-w-xl">
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight opacity-0 translate-y-6 transition-all duration-700 delay-100 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Fast & Free Delivery
              </h2>
              <p className="text-emerald-50 text-xs sm:text-sm md:text-base opacity-90% opacity-0 translate-y-6 transition-all duration-700 delay-200 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                Same day delivery available
              </p>

              <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2 opacity-0 translate-y-6 transition-all duration-700 delay-300 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                <button type="button" className="h-9 sm:h-11 px-4 sm:px-6 text-xs sm:text-sm rounded-lg bg-white text-emerald-700 font-semibold border-2 border-transparent shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Order Now
                </button>

                <button type="button" className="h-9 sm:h-11 px-4 sm:px-6 text-xs sm:text-sm rounded-lg bg-transparent text-white font-medium border-2 border-white/80 hover:bg-white/15 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Delivery Info
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mx-auto pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="bg-sky-100 p-3 rounded-full">
              <VanIcon className="text-blue-700" />
            </div>
            <div>
              <h5 className="font-semibold">Free Shipping</h5>
              <p className="text-gray-400">On orders over 500 EGP</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="bg-green-100 p-3 rounded-full">
              <Shield className="text-green-700" />
            </div>
            <div>
              <h5 className="font-semibold">Secure Payment</h5>
              <p className="text-gray-400">100% secure transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="bg-orange-100 p-3 rounded-full">
              <RotateCcw className="text-orange-700" />
            </div>
            <div>
              <h5 className="font-semibold">Easy Returns</h5>
              <p className="text-gray-400">14-day return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="bg-fuchsia-100 p-3 rounded-full">
              <Headset className="text-fuchsia-700" />
            </div>
            <div>
              <h5 className="font-semibold">Support</h5>
              <p className="text-gray-400">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
