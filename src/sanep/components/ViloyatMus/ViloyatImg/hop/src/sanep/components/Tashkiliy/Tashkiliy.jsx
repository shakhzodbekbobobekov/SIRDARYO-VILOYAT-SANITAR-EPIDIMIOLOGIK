import React, { Component } from 'react';
import './Style/Tashkiliy.scss';
import imgOne from './TashkiliyImg/imgOne.png';
import imgTwo from './TashkiliyImg/imgTwo.png';
import imgThree from './TashkiliyImg/imgThree.png';
import imgFour from './TashkiliyImg/imgFour.png';
import imgFair from './TashkiliyImg/imgfair.png';

class Tashkiliy extends Component {
    render() {
        return (
            <div className='tashkiliy-page'>
                <div className="tashkiliy-card">
                    <h1 className="tashkiliy-title">
                        Tashkiliy tuzilma
                    </h1>
                    <div className="tashkiliy-imgs">
                        <img src={imgOne} alt="" />
                        <img src={imgTwo} alt="" />
                        <img src={imgThree} alt="" />
                        <img src={imgFour} alt="" />
                        <img src={imgFair} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tashkiliy;
