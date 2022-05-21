import React, { Component } from 'react';
import CovidOne from './CovidImg/covidOne.jpg'
import './Style/Covid.scss'

class Covid extends Component {
    render() {
        return (
            <div className='covid-page'>
                <div className="covid-card">
                    <img src={CovidOne} alt="/" />
                    <p>
                        Вилоятимизда мавжуд ПЦР лабораториялар манзили.
                    </p>
                    <p>
                        Касалликни эрта аниқлашга ҳамда вилоятимиздаги эпидемиологик вазиятни барқарор сақланиши учун ўз ҳиссангизни қўшинг!!!
                    </p>
                    <p>
                        Сирдарё вилояти санитария-эпидемиологик осойишталик ва жамоат саломатлиги бошқармасининг ОАВ ва жамоатчилик билан ишлаш бўлими
                    </p>
                    <p>
                        Санитария соҳасидаги янгиликларни кузатиб боринг
                    </p>
                </div>
            </div>
        );
    }
}

export default Covid;
