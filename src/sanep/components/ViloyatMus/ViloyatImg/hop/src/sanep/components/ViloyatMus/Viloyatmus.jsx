import React, { Component } from 'react'
import './Style/Viloyatmus.scss'
import VilOne from './ViloyatImg/VilOne.jpg'

export default class Viloyatmus extends Component {
    render() {
        return (
            <div className='viloyatmus-page'>
                <div className="viloyatmus-all-card">
                    <h1 className="viloyatmus-title">viloyatmuslar</h1>
                    <div className="viloyatmus-card">
                        <div className="viloyatmus-users">
                            <div className="img">
                                <img src={VilOne} alt="" />
                            </div>
                            <div className="viloyatmus-about">
                                <h1 className="viloyatmus-name">
                                    Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmatining Sirdaryo viloyat boshqarmasi
                                </h1>
                                <h3 className="viloyatmus-lavozim">
                                    Rahbar:  Xasanov Jo‘rabek Xamraboyevich
                                </h3>
                                <h4 className="viloyatmus-qabul">
                                <a href="tel:+998672254174">Tel: +998 (67) 223 21 48 </a>
                                </h4>
                                <span className='line'></span>
                                <div className="viloyatmus-contact">
                                    <h4 className="viloyatmus-qabul">
                                        Manzil: <p>Sirdaryo viloyati Guliston shahar Ibn Sino 15</p>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
