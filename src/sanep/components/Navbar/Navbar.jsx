import React, { Component } from "react";
import "./Navbar.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class Navbar extends Component {
  state = {
    MenuActive: false,
  };
  MenuBtn = () => {
    const { MenuActive } = this.state;

    this.setState({
      MenuActive: !MenuActive,
    });
  };
  render() {
    const { MenuActive } = this.state;
    return (
      <>
        <div onClick={this.MenuBtn} className="menuBtn">
          <MenuIcon />
        </div>
        <ul className={MenuActive === false ? "NavbarNoActive" : " "}>
          <li>
            <span>
              Tashkilot haqida
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div onClick={this.MenuBtn} className="downs">
              <Link to="/umumiy-mal" className="Link">
                <Button variant="text">Umumiy ma`limot</Button>
              </Link>
              <Link to="/rahbariyat" className="Link">
                <Button variant="text">Rahbariyat</Button>
              </Link>
              <Link to="/hodimlar" className="Link">
                <Button variant="text">Hodimlar</Button>
              </Link>
              <Link to="/tashkiliy" className="Link">
                <Button variant="text">Tashkiliy tuzilma</Button>
              </Link>
            </div>
          </li>
          <li>
            <span>
              Hujjatlar
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div onClick={this.MenuBtn} className="downs">
              <Button variant="text">
                O`zbekiston Respublikasi qonunlari
                <ArrowForwardIcon />
                <div className="dowpdown">
                  <a href="https://lex.uz/docs/2732584">
                    Aholining sanitariya-epidemiologik osoyishtalik
                    to`g`risidagi qonuni
                  </a>
                  <a href="https://lex.uz/docs/58400">
                    Atmasfera havosini muhofaza qilish to`g`risidagi qonun
                  </a>
                  <a href="https://lex.uz/docs/12328">
                    Suv to`g`risidagi qonun
                  </a>
                  <a href="https://lex.uz/docs/5388842">O`RQ-685-son</a>
                </div>
              </Button>
              <a href="https://lex.uz/docs/5851527" className="Link">
                <Button variant="text">
                  Prezidentning qaror farmoyishlari
                  <ArrowForwardIcon />
                  <div className="dowpdown dropdown2">
                    <a href="https://lex.uz/docs/5851527">PQ-122-son</a>
                    <a href="https://lex.uz/docs/5090241">PQ-4887-son</a>
                    <a href="https://lex.uz/docs/5100677">PF-6110-son</a>
                    <a href="https://lex.uz/docs/-5784917">PF-35-son</a>
                    <a href="https://lex.uz/docs/3523132">PQ-3493-son</a>
                    <a href="https://lex.uz/docs/5514214">PF-6262-son</a>
                    <a href="https://lex.uz/docs/5459047">PQ-5148-son</a>
                    <a href="https://lex.uz/docs/-5495533">PQ-5177-son</a>
                    <a href="https://lex.uz/docs/5768536">PQ-43-son</a>
                    <a href="https://lex.uz/docs/-5838968">PQ-102-son</a>
                    <a href="https://lex.uz/docs/5411129">PF-6221-son</a>
                    <a href="https://lex.uz/docs/5841063">PF-60-son</a>
                    <a href="https://lex.uz/docs/4770761">PF-5969-son</a>
                    <a href="https://lex.uz/docs/5436182">PQ-5129-son</a>
                    <a href="https://lex.uz/docs/4914448">PQ-4790-son</a>
                    <a href="https://lex.uz/docs/-5459107">PF-6247-son</a>
                    <a href="https://lex.uz/docs/5100663">PQ-4891-son</a>
                    <a href="https://lex.uz/docs/5100699">PQ-4890-son</a>
                    <a href="https://lex.uz/docs/5123682">PQ-4899-son</a>
                    <a href="https://lex.uz/docs/5090241">PQ-4887-son</a>
                    <a href="https://lex.uz/docs/4476578">PQ-4419-son</a>
                    <a href="https://lex.uz/docs/-4102205">PQ-4059-son</a>
                    <a href="https://lex.uz/docs/5411129">PF-6221-son</a>
                  </div>
                </Button>
              </a>
              <Link to="/vaz-qarorlar" className="Link">
                <Button variant="text">
                  Vazirlar mahkamasining qaror farmoyishlari
                </Button>
              </Link>
              <Link to="/tashkilot" className="Link">
                <Button variant="text">Tashkilot hujjatlari</Button>
              </Link>
            </div>
          </li>
          <li>
            <span>
              Muassasalar
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div onClick={this.MenuBtn} className="downs">
              <Link className="Link" to="/tumanrahbariyat">
                <Button variant="text">Hududiy bo'limlar</Button>
              </Link>
              <Link to="/viloyat-massasalari" className="Link">
                <Button variant="text">Viloyat miqyosidagi muassasalar</Button>
              </Link>
            </div>
          </li>
          <li>
            <span>
              Matbuot hizmati
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div onClick={this.MenuBtn} className="downs">
              <Link to="/yangiliklar" className="Link">
                <Button variant="text">Yangiliklar</Button>
              </Link>
              <Link to="/fotolar" className="Link">
                <Button variant="text">Fotogalereya</Button>
              </Link>
              <Link to="/videolar" className="Link">
                <Button variant="text">Videogalereya</Button>
              </Link>
              <Link to="/matbuot" className="Link">
                <Button variant="text">Matbuot hizmati bilan bog`lanish</Button>
              </Link>
            </div>
          </li>
          <li>
            <span>
              Loyihalar
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div onClick={this.MenuBtn} className="downs">
              <Link to="/dav-dastur" className="Link">
                <Button variant="text">Davlat dasturlari</Button>
              </Link>
              <Link to="/tenderlar" className="Link">
                <Button variant="text">Tenderlar</Button>
              </Link>
              <Link to="/dav-xaridlar" className="Link">
                <Button variant="text">Davlat xaridlari</Button>
              </Link>
              <Link to="/investitsiya" className="Link">
                <Button variant="text">Investitsion loyihalar</Button>
              </Link>
            </div>
          </li>
          <li>
            <span>
              Interaktiv hizmatlar
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <div onClick={this.MenuBtn} className="downs">
              <Link to="/sertifikat" className="Link">
                <Button variant="text">Online sertifikat</Button>
              </Link>
            </div>
          </li>
          <li onClick={this.MenuBtn}>
            <Link to="/vaksina" className="LinkBtn">
              <Button variant="text" className="Button">
                Vaksinatsiya
              </Button>
            </Link>
          </li>
          <li onClick={this.MenuBtn}>
            <Link to="/covid" className="LinkBtn">
              <Button variant="text" className="Button">
                COVID-19 Lab
              </Button>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
