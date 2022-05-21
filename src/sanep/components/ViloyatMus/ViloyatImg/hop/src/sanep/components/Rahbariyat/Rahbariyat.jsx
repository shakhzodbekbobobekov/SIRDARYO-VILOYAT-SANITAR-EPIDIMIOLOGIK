import React, { Component } from 'react';
import './Style/Rahbariyat.scss'
import ImgOne from './RahbariyatImg/One.jpg'
import ImgTwo from './RahbariyatImg/Two.jpg'
import ImgTwree from './RahbariyatImg/Twree.jpg'
import ImgFour from './RahbariyatImg/Four.jpg'

import bir from './HodimImg/bir.jpg'
import ikki from './HodimImg/ikki.jpg'
import uch from './HodimImg/uch.jpg'
import tort from './HodimImg/tort.jpg'
import besh from './HodimImg/besh.jpg'
import olti from './HodimImg/olti.jpg'
import yetti from './HodimImg/yetti.jpg'
import sakkiz from './HodimImg/sakkiz.jpg'
import toqqiz from './HodimImg/toqqiz.jpg'
import on from './HodimImg/on.jpg'
import onbir from './HodimImg/onbir.jpg'

class Rahbariyat extends Component {
    render() {
        return (
            <div className='rahbariyat-page'>
                <div className="rahbariyat-all-card2">
                    <h1 className="rahbariyat-title">Rahbariyat</h1>
                    <div className="rahbariyat-card">
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={ImgOne} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Hasanov Jo`rabek Hamroboyevich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 225 41 74</a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="mailto:">jurabek.khasanov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>10:00 dan 12:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={ImgTwo} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Sultanov Jamshid Artiqbayevich</h1>
                                <h3 className="rahbar-lavozim">Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi boshlig`I o`ribosari</h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 225 41 74</a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="mailto:">jamshid.sultanov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Seshanba payshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>10:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={ImgTwree} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Abduqodirov Xavast Abdukarimovich</h1>
                                <h3 className="rahbar-lavozim">Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi boshlig`I o`rinbosari</h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 225 41 74</a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="mailto:">xavas.abdukodirov@ssv.uz </a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Seshanba payshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>10:00 dan 12:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={ImgFour} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Suyunov Doniyor Toshpo`latovich</h1>
                                <h3 className="rahbar-lavozim">Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi boshlig`I o`rinbosari</h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 225 65 11</a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="mailto:">doniyor.suyunov@ssv.uz </a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>shanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>10:00 dan 12:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rahbariyat-all-card">
                    <h1 className="rahbariyat-title">Hodimlar</h1>
                    <div className="rahbariyat-card">
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={bir} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Sherutayeva Gulnora Obidovna</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Guliston shahar bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 225 41 74</a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">gulnora.sherutayeva@ssv.uz </a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={ikki} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Isoqulov Rustam Norbutayevich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Xovos tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">Rustam.isakulov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Chorshanba juma</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={uch} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Donayev Botirqul Badalovich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Yangiyer shahar bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">botirkul.donayev@ssv.uz </a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={tort} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Xudoyqulova Nazira Utanovna</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Guliston tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">nazira.xudoyqulova@ssv.uz </a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={besh} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Kushboqov Ulug`bek Mamatqulovich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Sirdaryo tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">ulugbek.kushbakov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={olti} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Xatamov Rabimkul Raxmatovich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Boyovut tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">rabimkul.khatamov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={yetti} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Polvonov Sadulla Xazratovich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Sardoba tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">sadulla.polvonov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={sakkiz} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Xalbayev Abdugafur Tadjibayevich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Sayxunobo tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">Abdugafur.khalbayev@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={toqqiz} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Abduraxmanov Pirimkul Djurayevich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Oqoltin tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">pirimkul.abdurakhmanov@ssv.uz </a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={on} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Xolmurodov Xamdam Allamurdovich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Shirin shahar bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">khamdam.kholmurodov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="rahbariyat-users">
                            <div className="img">
                                <img src={onbir} alt="" />
                            </div>
                            <div className="rahbariyat-about">
                                <h1 className="rahbar-name">Nadirov Ulug`bek Yusupovich</h1>
                                <h3 className="rahbar-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati
                                    Sirdaryo viloyati boshqarmasi Xovos tuman bo`limi boshlig`i
                                </h3>
                                <h4 className="rahbar-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="rahbar-contact">
                                    <h4 className="rahbar-email">
                                        Email:
                                        <a href="/">ulugbek.nadirov@ssv.uz</a>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Qabul kunlari: <p>Dushanba Chorshanba</p>
                                    </h4>
                                    <h4 className="rahbar-qabul">
                                        Vaqt: <p>15:00 dan 17:00 gacha</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rahbariyat;
