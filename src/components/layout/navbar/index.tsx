import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./navbar.module.scss";

const useScrollingUp = (): boolean => {
  const [scrollingUp, setScrollingUp] = useState<boolean>(false);

  useEffect(() => {
    let prevScroll: number;

    const handleScroll = () => {
      const currScroll: number = window.pageYOffset;
      const isScrolled: boolean = prevScroll > currScroll;
      setScrollingUp(isScrolled);
      if (currScroll === 0 || prevScroll < currScroll) {
        setScrollingUp(false);
      }
      prevScroll = currScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollingUp;
};

const Navbar: React.FC = () => {
  const [togle, setTogle] = useState<boolean>(false);

  return (
    <header
      className={`${style.navbar} ${
        useScrollingUp() || togle ? style.active : ""
      }`}
    >
      <div className={style.logo}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/bein-logo.svg`} alt="Logo" />
        </Link>
      </div>
      <div
        className={`${style.toggle} ${togle ? style.active : ""}`}
        onClick={() => setTogle(!togle)}
      >
        <span></span>
      </div>
      <nav className={`${style["nav-items"]} ${togle ? style.active : ""}`}>
        <div className="nav-item">
          <ul>
            <li>
              <Link to="/">Paketler</Link>
            </li>
            <li>
              <Link to="/">İçerikleri Keşfet</Link>
            </li>
          </ul>
        </div>
        <div className="nav-item">
          <ul>
            <li className={style["btn-buy"]}>
              <Link to="/">Satın Al</Link>
            </li>
            <li className={style["btn-login"]}>
              <Link to="/">Giriş Yap</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
