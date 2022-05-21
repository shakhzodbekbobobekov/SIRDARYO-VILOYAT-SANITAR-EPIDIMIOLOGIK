import React, { Component } from 'react';
import './Style/Umumiy.scss'
import UmMalImgOne from './UmumiyImg/photo_2022-04-23_22-25-28.jpg'
import UmMalImgTwo from './UmumiyImg/banochka-petri-s-bakteriyami.jpg'

class Umumiymal extends Component {
    render() {
        return (
            <div className='umumiymal-page'>
                <div className="ummal-posts">
                    <h1 className="ummal-title">
                        Umumiy ma`lumot
                    </h1>
                    <p className="ummal-text">
                        O`zbekiston Respublikasi Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmati (keyingi o`rinlarda — Sanitariya-epidemiologiya xizmati) maqomi, asosiy vazifalari, funksiyalari, huquqlari, javobgarligini, faoliyatini tashkil etish va hisobot berish tartibini, shuningdek, uning rahbarlarining funksional vazifalari va mas`uliyatini belgilaydi.
                    </p>
                    <img src={UmMalImgOne} alt="Img" />
                    <p className="ummal-text">
                        Sanitariya-epidemiologiya xizmati aholining sanitariya-epidemiologik osoyishtaligi va jamoat salomatligi sohasida yagona davlat siyosatini amalga oshirish uchun javobgar bo`lgan vakolatli davlat boshqaruvi organi hisoblanadi.Sanitariya-epidemiologiya xizmati o`z faoliyatida O`zbekiston Respublikasi Konstitusiyasi va qonunlariga, O`zbekiston Respublikasi 
                        Oliy Majlisi palatalarining qarorlariga, O`zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Vazirlar Mahkamasining qarorlari va farmoyishlariga, shuningdek, ushbu nizomga va boshqa qonun hujjatlariga amal qiladi.
                    </p>
                    <img src={UmMalImgTwo} alt="Img" id='imgs'/>
                    <p className="ummal-text">
                        Sanitariya-epidemiologiya xizmati va uning Qoraqalpog`iston Respublikasi, viloyatlar, Toshkent shahar sanitariya-epidemiologik osoyishtalik va jamoat salomatligi boshqarmalari, tuman (shahar) sanitariya-epidemiologik osoyishtalik va jamoat salomatligi bo`limlari, shuningdek, uning tarkibiga kiradigan tegishli idoraviy mansub tashkilotlar yuridik shaxs hisoblanadi, 
                        O`zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o`z nomi davlat tilida yozilgan muhrga egalik qilish huquqiga ega.
                    </p>
                </div>
            </div>
        );
    }
}

export default Umumiymal;
