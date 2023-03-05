import style from "./sectionCategorysBody.module.scss";
import { Link } from "react-router-dom";
import convertSlug from "../../utils/convertSlug";

const SectionCategorysBody: React.FC = () => {
  return (
    <section id={style.categorys}>
      <div className="container">
        <div className="row">
          <div className={style.galery}>
            {[0, 1, 2, 3, 4, 5, 6].map(() =>
              data.map((film, i) => {
                return (
                  <Link
                    to={`/film/${convertSlug(film.name)}/${film.id}`}
                    key={i}
                  >
                    <div className={style.wraper}>
                      <img src={process.env.PUBLIC_URL + film.imgSrc} alt="" />
                      <div className={style.info}>
                        <h2>{film.name}</h2>
                        <p>{film?.date || "-"}</p>
                      </div>
                      <div className={style.overlay}>
                        <h2>{film.name}</h2>
                        <p>{film?.date}</p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCategorysBody;

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
