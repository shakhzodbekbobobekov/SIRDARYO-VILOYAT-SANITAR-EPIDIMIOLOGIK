import React, { Component } from 'react';
import './Style/Sertifikat.scss'

class Sertifikat extends Component {
    render() {
        return (
            <div className='sertifikat-page'>
                <h1 className="sertifikat-title">
                    Hujjatlar
                </h1>
                <div className="sertifikat-cards">
                    <a href="http://www.sanepid.uz/info_img/file/j4b71oF2dD.pdf" className="sertifikat-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="sertifikat-comment">
                            Normativ hujjatlar
                        </p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Sertifikat;
