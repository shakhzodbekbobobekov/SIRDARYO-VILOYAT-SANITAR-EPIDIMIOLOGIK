import React, { Component } from 'react';
import './Style/Rahbariyat.scss'
import ImgOne from './RahbariyatImg/One.jpg'
import ImgTwo from './RahbariyatImg/Two.jpg'
import ImgTwree from './RahbariyatImg/Twree.jpg'
import ImgFour from './RahbariyatImg/Four.jpg'

class Rahbariyat extends Component {
    render() {
        return (
            <div className='rahbariyat-page'>
                <div className="rahbariyat-all-card">
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
                                        <a href="/">jamshid.sultanov@ssv.uz</a>
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
                                <a href="tel:+998672254174">Tel: +998 (67) 225 41 74</a>
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

            </div>
        );
    }
}

export default Rahbariyat;
