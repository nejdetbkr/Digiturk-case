import { useParams } from "react-router-dom";
import style from "./sectionFilmBody.module.scss";

const SectionFilmBody: React.FC = () => {
  const { id } = useParams();
  let order: number = parseInt(id ? id : "0");
  return (
    <section id={style.film}>
      <div className="container">
        <div className={style.row}>
          <div className={style.picture}>
            <img src={process.env.PUBLIC_URL + data[order].imgSrc} alt="" />
          </div>
          <div className={style.content}>
            <h2>{data[order]?.name}</h2>
            <p className={style.date}>{data[order].date}</p>
            <p className={style.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={style.side}>
            <p className={style.btn}>GiRiŞ YAP</p>
            <p className={style.btn}>Paketleri İncele</p>
            <p className={`${style.btn} ${style.grey}`}>FRAGMAN İZLE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFilmBody;

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
