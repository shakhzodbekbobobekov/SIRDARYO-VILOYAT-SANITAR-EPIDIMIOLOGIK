import React, { Component } from 'react';
import './Style/Asosiy.scss'
import {Link} from 'react-router-dom'
import { Button  } from '@mui/material';
import newsOne from './AsosiyImg/asosiyFour.jpg'
import newsTwo from './AsosiyImg/asosiyFeir.jpg'

class Asosiy extends Component {
    render() {
        return (
            <div className='asosiy-page'>
                <div className="asosiy-post" id='asosiy-post-1'>
                    <div className="asosiy-post-text">
                        <h1 className="asosiy-post-title">
                            Doim xizmatingizdamiz !
                        </h1>
                        <p className="asosiy-post-comment">
                            SANITARIYA EPIDIMIOLOGIK OSOYISHTALIK VA 
                            JAMOAT BIRLASHMASI SIRDARYO VILOYAT BOSHQARMASI
                        </p>
                        <Link to="/umumiy-mal">
                            <Button variant="contained">Batafsil</Button>
                        </Link>
                    </div>
                </div>
                <div className="asosiy-post" id='asosiy-post-2'>
                    <div className="asosiy-post-text">
                        <h1 className="asosiy-post-title">
                            Hududiy bo`limlar
                        </h1>
                        <p className="asosiy-post-comment">
                            HUDUDIY BO`LIMLAR HAQIDA UMUMIY MA`LUMOTLAR
                        </p>
                        <Link to="/hududiy">
                            <Button variant="contained">Batafsil</Button>
                        </Link>
                    </div>
                </div>
                <div className="asosiy-post" id='asosiy-post-3'>
                    <div className="asosiy-post-text">
                        <h1 className="asosiy-post-title">
                            Muassasalar
                        </h1>
                        <p className="asosiy-post-comment">
                            VILOYAT BO`YLAB MUASSASALARIMIZ
                        </p>
                        <Link to="/viloyat">
                            <Button variant="contained">Batafsil</Button>
                        </Link>
                    </div>
                </div>
                <div className="asosiy-news">
                    <div className="news-post">
                        <h1 className="news-title">
                            Dunyo yangiliklari
                        </h1>
                        <img src={newsOne} alt="" />
                        <p className="news-comment">
                            Dunyodagi eng so`ngi yangiliklar faqat bizda
                        </p>
                        <Link to="Yangiliklar">
                            Batafsil..
                        </Link>
                    </div>
                    <div className="news-post">
                        <h1 className="news-title">
                            O`zbekiston yangiliklari
                        </h1>
                        <img src={newsTwo} alt="" />
                        <p className="news-comment">
                            Respublikamizdagi yangiliklardan bahramand bo`ling
                        </p>
                        <Link to="Yangiliklar">
                            Batafsil..
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Asosiy;
