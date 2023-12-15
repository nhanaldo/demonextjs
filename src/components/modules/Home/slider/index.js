import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const SliderUpdate = ({posteds}) => {
  return (
    <div>
      <span className="text-[18px] font-bold uppercase ">Mới Đăng</span>
      <Swiper
        // sua
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides
        slidesPerView={2}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/djrbd6ftt/image/upload/v1701399777/hobanovel/novel/thumbnail/1701399776283.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/djrbd6ftt/image/upload/v1698046049/hobanovel/novel/thumbnail/1698046048981.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/djrbd6ftt/image/upload/v1695147343/hobanovel/novel/thumbnail/1695147341670.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/djrbd6ftt/image/upload/v1695147218/hobanovel/novel/thumbnail/1695147217127.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/djrbd6ftt/image/upload/v1695147172/hobanovel/novel/thumbnail/1695147171220.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/djrbd6ftt/image/upload/v1695147008/hobanovel/novel/thumbnail/1695147006514.jpg" />
        </SwiperSlide>
      </Swiper>
      
        {/* {
          posteds.map((item,index) => {
            return (
              <div key={index}>
                  <h3 className="px-2 font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="px-2 line-clamp-2 text-sm">
                    {item.description &&
                      item?.description.replace(/<[^>]+>/g, "")}
                  </div>
                  <p className="px-2 mt-2 mb-2 text-sm">{item.author}</p>
                </div>
            )
          })
        } */}
    </div>
  
  );
};
export default SliderUpdate;
