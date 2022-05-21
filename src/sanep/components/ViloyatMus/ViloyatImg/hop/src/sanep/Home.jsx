import React, { Component } from 'react';
import './Home.scss'
import Logo from './HomeImg/logo.png'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { SearchOutlined } from '@mui/icons-material';
import Navbar from './components/Navbar/Navbar';
import Asosiy from './components/Asosiy/Asosiy';
import { Route, Routes } from 'react-router-dom';
import Umumiymal from './components/Umumiymal/Umumiymal';
import Rahbariyat from './components/Rahbariyat/Rahbariyat';
import Hodimlar from './components/Hodimlar/Hodimlar';
import Tashkiliy from './components/Tashkiliy/Tashkiliy';
import Vazqarorlar from './components/Vazqarorlar/Vazqarorlar';
import Tashkilot from './components/Tashkilot/Tashkilot';
import Fotolar from './components/Fotolar/Fotolar';
import Videolar from './components/Videolar/Videolar';
import Matbuot from './components/Matbuot/Matbuot';
import Yangiliklar from './components/Yangiliklar/Yangiliklar';
import Davdastur from './components/Davdasturlar/Davdastur';
import Tenderlar from './components/Tenderlar/Tenderlar';
import Davxaridlar from './components/Davxaridlar/Davxaridlar';
import Investitsiya from './components/Investitsiya/Investitsiya';
import Sertifikat from './components/Sertifikat/Sertifikat';
import Vaksina from './components/Vaksina/Vaksina';
import Covid from './components/Covid/Covid';
import Hamkortash from './components/HamkorTashkilotlar/Hamkortash';
import Footer from './components/Footer/Footer';
import {Link} from 'react-router-dom'
import Viloyatmus from './components/ViloyatMus/Viloyatmus';

class Home extends Component {
    render() {
        return (
            <div className='home-card'>
                <header>
                    <Link to="/" className='header-logo-card'>
                        <img src={Logo} alt="Logo Img" className="header-logo" />
                        <h1 className="header-title">
                            SANITARIYA-EPIDEMIOLOGIK OSOYISHTALIK VA JAMOAT SALOMATLIGI XIZMATINING SIRDARYO VILOYAT BOSHQARMASI 
                        </h1>
                    </Link>
                    <div className="header-contact-card">
                        <div className="header-contacts">
                                <a href="/">
                                    <LocalPhoneRoundedIcon className='LocalPhoneRoundedIcon'/>
                                    <a href="tel:+998672254174">Tel: +998 (67) 223 21 48</a>
                                </a>
                        </div>
                        <form action="" className="search-section">
                            <input type="search" name="" id="" className="search-input" placeholder='Search' />
                            <SearchOutlined className='SearchOutlined'/>
                        </form>
                    </div>
                </header>
                <div className="navbar-all">
                    <Navbar/>
                </div>
                <Routes>
                    <Route path='/' element={
                        <Asosiy/>
                    }/>
                    <Route path='umumiy-mal' element={
                        <Umumiymal/>
                    }/>
                    <Route path='/rahbariyat' element={
                        <Rahbariyat/>
                    }/>
                    <Route path='/hodimlar' element={
                        <Hodimlar/>
                    }/>
                    <Route path='/tashkiliy' element={
                        <Tashkiliy/>
                    }/>
                    <Route path='/viloyat-massasalari' element={
                        <Viloyatmus/>
                    }/>
                    <Route path='/vaz-qarorlar' element={
                        <Vazqarorlar/>
                    }/>
                    <Route path='/tashkilot' element={
                        <Tashkilot/>
                    }/>
                    <Route path='/yangiliklar' element={
                        <Yangiliklar/>
                    }/>
                    <Route path='/fotolar' element={
                        <Fotolar/>
                    }/>
                    <Route path='/videolar' element={
                        <Videolar/>
                    }/>
                    <Route path='/matbuot' element={
                        <Matbuot/>
                    }/>
                    <Route path='/dav-dastur' element={
                        <Davdastur/>
                    }/>
                    <Route path='/tenderlar' element={
                        <Tenderlar/>
                    }/>
                    <Route path='/dav-xaridlar' element={
                        <Davxaridlar/>
                    }/>
                    <Route path='/investitsiya' element={
                        <Investitsiya/>
                    }/>
                    <Route path='/sertifikat' element={
                        <Sertifikat/>
                    }/>
                    <Route path='/vaksina' element={
                        <Vaksina/>
                    }/>
                    <Route path='/covid' element={
                        <Covid/>
                    }/>
                </Routes>
                <Hamkortash/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
