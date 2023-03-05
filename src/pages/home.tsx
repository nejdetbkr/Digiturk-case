import HeaderSlider from "../components/home/sectionHeaderSlider";
import CategorySlider from "../components/home/sectionCategorySlider";
const Home: React.FC = () => {
  return (
    <>
      <HeaderSlider />
      {categorys.map((category, i) => {
        return <CategorySlider key={i} title={category} />;
      })}
    </>
  );
};

export default Home;

const categorys: string[] = [
  "Öne Çıkanlar",
  "TOD Originals",
  "Oscar Filmleri",
  "BKM Filmleri",
  "Popüler Filmler",
  "Aksiyon Filmleri",
  "Yeni Gelenler",
];
