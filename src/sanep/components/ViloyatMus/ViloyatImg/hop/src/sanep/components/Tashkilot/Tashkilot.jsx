import React, { Component } from 'react';
import './Style/Tashkilot.scss'

class Tashkilot extends Component {
    render() {
        return (
            <div className='tashkilot-page'>
                <h1 className="tashkilot-title">
                    Hujjatlar
                </h1>
                <div className="tashkilot-cards">
                    <a href="http://www.sanepid.uz/info_img/file/ScltLdooYm.pdf" className="tashkilot-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tashkilot-comment">
                            Buyruq № 1
                        </p>
                    </a>
                    <a href="http://www.sanepid.uz/info_img/file/QcDxhPc7Ic.pdf" className="tashkilot-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tashkilot-comment">
                            Buyruq № 6
                        </p>
                    </a>
                    <a href="http://www.sanepid.uz/info_img/file/fCJsCpzKy4.pdf" className="tashkilot-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tashkilot-comment">
                            Buyruq № 20
                        </p>
                    </a>
                    <a href="http://www.sanepid.uz/info_img/file/jxuF5hXXi0.pdf" className="tashkilot-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tashkilot-comment">
                            Uslubiy qo‘llanma
                        </p>
                    </a>
                    <a href="http://www.sanepid.uz/info_img/file/HlKXd6Xu6n.pdf" className="tashkilot-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tashkilot-comment">
                            Buyruq № 14
                        </p>
                    </a>
                    <a href="http://www.sanepid.uz/info_img/file/9DwcFDRRu6.pdf" className="tashkilot-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tashkilot-comment">
                            Covid-19 va o‘tkir respirator virusli infeksiyalar
                        </p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Tashkilot;
