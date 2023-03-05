import FilmBody from "../components/categorys/film/sectionFilmBody";
import CategorySlider from "../components/home/sectionCategorySlider";

const Film: React.FC = () => {
  return (
    <>
      <FilmBody />
      <CategorySlider title={"İlgini çekebilecek filmler."} />
    </>
  );
};

export default Film;
