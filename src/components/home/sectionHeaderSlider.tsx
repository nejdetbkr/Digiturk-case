import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import style from "./sectionHeaderSlider.module.scss";

import { Pagination, Autoplay } from "swiper";

const HeaderSlider: React.FC = () => {
  return (
    <section id={style.headerSlider}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="headerSwiper"
      >
        {[1, 2, 3].map((count, i) => {
          return (
            <SwiperSlide key={i}>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL}/images/slide0${count}-m.jpg`}
                  media="(max-width: 576px)"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/slide0${count}.jpg`}
                  alt="slider"
                />
              </picture>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeaderSlider;
