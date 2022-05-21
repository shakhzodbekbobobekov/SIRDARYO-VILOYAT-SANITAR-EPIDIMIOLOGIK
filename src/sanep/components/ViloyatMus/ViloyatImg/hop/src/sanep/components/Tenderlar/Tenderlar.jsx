import React, { Component } from 'react';
import './Style/Tenderlar.scss'

class Tenderlar extends Component {
    render() {
        return (
            <div className="tenderlar-page">
                <h1 className="tenderlar-title">
                    Hujjatlar
                </h1>
                <div className="tenderlar-cards">
                    <a href="http://www.sanepid.uz/info_img/file/wecdgKIC2f.pdf" className="tenderlar-file" download>
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tenderlar-comment">
                            PLANShET, PERSONALNY KOMPYUTER
                        </p>
                    </a>
                    <a href="http://www.sanepid.uz/info_img/file/53142h8zpa.pdf" className="tenderlar-file">
                        <img src="https://img.icons8.com/color/48/000000/mac-folder.png" alt='img'/>
                        <p className="tenderlar-comment">
                            Veb Kamera, Printer
                        </p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Tenderlar;
