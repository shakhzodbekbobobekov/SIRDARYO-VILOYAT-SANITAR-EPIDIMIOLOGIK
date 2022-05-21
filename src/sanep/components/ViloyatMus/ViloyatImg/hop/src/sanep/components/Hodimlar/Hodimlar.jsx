import React, { Component } from 'react';
import './Style/Hodimlar.scss'
import bir from './HodimImg/bir.jpg'

class Hodimlar extends Component {
    render() {
        return (
            <div className='hodim-page'>
                <div className="hodim-all-card">
                    <h1 className="hodim-title">Hodimlar</h1>
                    <div className="hodim-card">
                        <div className="hodim-users">
                            <div className="img">
                                <img src={bir} alt="" />
                            </div>
                            <div className="hodim-about">
                                <h1 className="hodim-name">Sherutayeva Gulnora Obidovna</h1>
                                <h3 className="hodim-lavozim">
                                    Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati 
                                    Sirdaryo viloyati boshqarmasi Guliston shahar bo`limi boshlig`i
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hodimlar;
