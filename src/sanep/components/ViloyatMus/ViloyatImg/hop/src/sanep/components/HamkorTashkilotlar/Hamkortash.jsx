import React, { Component } from 'react';
import { Link } from '@mui/material';
import './Style/Hamkortash.scss';
import gov from './HamkorTashImg/gov.svg';
import privivki from './HamkorTashImg/privivki.png';
import ssv from './HamkorTashImg/ssv.png';
import unicef from './HamkorTashImg/unisef.png';
import who from './HamkorTashImg/who.png'

class Hamkortash extends Component {
  render() {
    return (
      <div className='hamkortash-page'>
        <div className="hamkortash-cards">
          <figure>
            <Link href="https://ssv.uz/" target="_blank" className='link'>
              <img src={ssv} alt="" />
            </Link>
            <Link href="https://privivki.uz/ru/" target="_blank" className='link'>
              <img src={privivki} alt="" />
            </Link>
            <Link href="https://www.who.int/" target="_blank" className='link'>
              <img src={who} alt="" />
            </Link>
            <Link href="https://www.unicef.org/" target="_blank" className='link'>
              <img src={unicef} alt="" />
            </Link>
            <Link href="https://gov.uz/uz" target="_blank" className='link'>
              <img src={gov} alt="" />
            </Link>
          </figure>
        </div>
      </div>
    );
  }
}

export default Hamkortash;
