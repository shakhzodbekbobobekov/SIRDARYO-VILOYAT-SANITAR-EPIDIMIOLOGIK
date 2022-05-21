import React, { Component } from 'react';
import './Navbar.scss'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

class Navbar extends Component {
    state = {
        MenuActive: false
    }

    MenuBtn = () => {
        const { MenuActive } = this.state

        this.setState({
            MenuActive: !MenuActive
        })
    }






    render() {
        const { MenuActive } = this.state
        return (
            <>
                <div onClick={this.MenuBtn} className="menuBtn">
                    <MenuIcon/>
                </div>
                <ul className={MenuActive === false ? "NavbarNoActive" : " "}>
                    <li>
                        <span>
                            Tashkilot haqida
                            <i className='fa-solid fa-chevron-down'></i>
                        </span>
                        <div onClick={this.MenuBtn} className="downs">
                            <Link to="/umumiy-mal" className='Link'>
                                <Button variant="text">Umumiy ma`limot</Button>
                            </Link>
                            <Link to="/rahbariyat" className='Link'>
                                <Button variant="text">Rahbariyat</Button>
                            </Link>
                            <Link to="/hodimlar" className='Link'>
                                <Button variant="text">Hodimlar</Button>
                            </Link>
                            <Link to="/tashkiliy" className='Link'>
                                <Button variant="text">Tashkiliy tuzilma</Button>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>
                            Hujjatlar
                            <i className='fa-solid fa-chevron-down'></i>
                        </span>
                        <div onClick={this.MenuBtn} className="downs">
                            <a href="https://lex.uz/docs/2732584" className='Link'>
                                <Button variant="text">O`zbekiston Respublikasi qonunlari</Button>
                            </a>
                            <a href="https://lex.uz/docs/5851527" className='Link'>
                                <Button variant="text">Prezidentning qaror farmoyishlari</Button>
                            </a>
                            <Link to="/vaz-qarorlar" className='Link'>
                                <Button variant="text">Vazirlar mahkamasining qaror farmoyishlari</Button>
                            </Link>
                            <Link to="/tashkilot" className='Link'>
                                <Button variant="text">Tashkilot hujjatlari</Button>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>
                            Muassasalar
                            <i className='fa-solid fa-chevron-down'></i>
                        </span>
                        <div onClick={this.MenuBtn} className="downs">
                            <a href="https://ssv.uz/uz/region" className='Link'>
                                <Button variant="text">Hududiy boshqarmalar</Button>
                            </a>
                            <Link to="/viloyat-massasalari" className='Link'>
                                <Button variant="text">Viloyat miqyosidagi muassasalar</Button>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>
                            Matbuot hizmati
                            <i className='fa-solid fa-chevron-down'></i>
                        </span>
                        <div onClick={this.MenuBtn} className="downs">
                            <Link to="/yangiliklar" className='Link'>
                                <Button variant="text">Yangiliklar</Button>
                            </Link>
                            <Link to="/fotolar" className='Link'>
                                <Button variant="text">Fotogalereya</Button>
                            </Link>
                            <Link to="/videolar" className='Link'>
                                <Button variant="text">Videogalereya</Button>
                            </Link>
                            <Link to="/matbuot" className='Link'>
                                <Button variant="text">Matbuot hizmati bilan bog`lanish</Button>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>
                            Loyihalar
                            <i className='fa-solid fa-chevron-down'></i>
                        </span>
                        <div onClick={this.MenuBtn} className="downs">
                            <Link to="/dav-dastur" className='Link'>
                                <Button variant="text">Davlat dasturlari</Button>
                            </Link>
                            <Link to="/tenderlar" className='Link'>
                                <Button variant="text">Tenderlar</Button>
                            </Link>
                            <Link to="/dav-xaridlar" className='Link'>
                                <Button variant="text">Davlat xaridlari</Button>
                            </Link>
                            <Link to="/investitsiya" className='Link'>
                                <Button variant="text">Investitsion loyihalar</Button>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>
                            Interaktiv hizmatlar
                            <i className='fa-solid fa-chevron-down'></i>
                        </span>
                        <div onClick={this.MenuBtn} className="downs">
                            <Link to="/sertifikat" className='Link'>
                                <Button variant="text">Online sertifikat</Button>
                            </Link>
                        </div>
                    </li>
                    <li onClick={this.MenuBtn}>
                        <Link to="/vaksina" className='LinkBtn'>
                            <Button variant="text" className='Button'>
                                Vaksinatsiya
                            </Button>
                        </Link>
                    </li>
                    <li onClick={this.MenuBtn}>
                        <Link to="/covid" className='LinkBtn'>
                            <Button variant="text" className='Button'>
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
