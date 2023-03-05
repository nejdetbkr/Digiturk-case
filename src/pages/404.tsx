import { Link } from "react-router-dom";
const Page404: React.FC = () => {
  return (
    <section className="container">
      <div className="center-page">
        <h1>Sayfa Bulunamadı.</h1>
        <Link to="/">Anasayfaya dön.</Link>
      </div>
    </section>
  );
};

export default Page404;
