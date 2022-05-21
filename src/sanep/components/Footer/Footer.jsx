import React, { Component } from 'react';
import { Link } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import './Style/Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-cards">
                    <div className="footer-title">
                        <img src='http://www.sanepid.uz/images/Footer_logo.svg' alt="" />
                        <p className="sanepid-manzil">
                            Manzil: Sirdaryo viloyati
                        </p>
                    </div>
                    <div className="footer-hamkor">
                        <h1 className="footer-hamkor-title">
                            Foydali havolalar
                        </h1>
                        <ul>
                            <Link href="https://ssv.uz/" target="_blank">ssv.uz</Link>
                            <Link href="https://privivki.uz/" target="_blank">privivki.uz</Link>
                            <Link href="https://gov.uz/uz" target="_blank">gov.uz</Link>
                            <Link href="https://www.who.int/" target="_blank">who.int</Link>
                            <Link href="https://www.unicef.org/" target="_blank">unicef.org</Link>
                        </ul>
                    </div>
                    <div className="footer-contacts">
                        <h1 className="footer-contacts-title">
                            Biz bilan bog`laning
                        </h1>
                        <p className="footer-phone">
                            <LocalPhoneRoundedIcon className='icon'/> 
                                <a className='footer__tel' href="tel:+998672254174">Tel: +998 (67) 123 45 67 </a>
                        </p>
                        <div className="footer-contacts-icons">
                            <TelegramIcon className='icon'/>
                            <FacebookOutlinedIcon className='icon'/>
                            <TwitterIcon className='icon'/>
                            <InstagramIcon className='icon'/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
