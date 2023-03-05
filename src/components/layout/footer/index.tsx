import style from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.row}>
          <div className={style.col}>
            <h4>Yardım</h4>
            <ul>
              <li>Sıkça Sorulan Sorular</li>
              <li>Kupon Kodu</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className={style.col}>
            <h4>Legal</h4>
            <ul>
              <li>Telif Hakkı Uyarısı</li>
              <li>Müşteri Aydınlatma Metni</li>
              <li>Çerez Aydınlatma Metni</li>
            </ul>
          </div>
          <div className={style.col}>
            <span>CANLI DESTEK</span>
          </div>
        </div>
        <hr />
        <div className={style.row}>
          <p>
            Digiturk bir beIN MEDIA GROUP kuruluşudur. © 2023 Her hakkı
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
