import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import convertSlug from "../../utils/convertSlug";

import "swiper/css";
import style from "./sectionCategorySlider.module.scss";

interface Props {
  title: string;
}

const CategorySlider: React.FC<Props> = (props: Props) => {
  return (
    <section id={style.CategorySlider}>
      <div className="container">
        <div className={style.wraper}>
          <div className={style.info}>
            <h2>{props.title}</h2>
            <Link to="/categorys">Tümü</Link>
          </div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            breakpoints={{
              576: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            loop={true}
            className={style.categorySwiper}
          >
            {[0, 1].map(() =>
              data.map((film, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Link to={`/film/${convertSlug(film.name)}/${film.id}`}>
                      <img
                        src={process.env.PUBLIC_URL + film.imgSrc}
                        alt="slider"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;

interface film {
  id: number;
  imgSrc: string;
  name: string;
  date: number | null;
}

const data: film[] = [
  {
    id: 0,
    imgSrc: "/images/category01.jpg",
    name: "Kuzeyli",
    date: 2022,
  },
  {
    id: 1,
    imgSrc: "/images/category02.jpg",
    name: "Çıkış Yok",
    date: 2022,
  },
  {
    id: 2,
    imgSrc: "/images/category03.jpg",
    name: "Top Gun: Maverick",
    date: 2022,
  },
  {
    id: 3,
    imgSrc: "/images/category04.jpg",
    name: "Kim Demiş Kötüyüz Diye?",
    date: 2022,
  },
  {
    id: 4,
    imgSrc: "/images/category05.jpg",
    name: "Körkütük",
    date: 2020,
  },
  {
    id: 5,
    imgSrc: "/images/category06.jpg",
    name: "Your Honor",
    date: null,
  },
];
