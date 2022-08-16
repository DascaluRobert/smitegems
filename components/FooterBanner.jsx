import React from 'react'
import Link from 'next/link';

import {urlFor} from '../lib/client';

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText,
midText, desc, product, buttonText, image }}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
      <div className='left'>
        <p>{discount}</p>
        </div>        
      </div>
    </div>
  )
}

export default FooterBanner