import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Card from 'react-bootstrap/Card';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='center'>
       <Card>
       <Card.Body>
       <div className='products-heading'>
        <h2>Welcome to Smite Market</h2>  
      </div>
      <div className='banner-under'>
      <p>Here you will find all smite content but cheaper</p>   
      </div>
        </Card.Body>
        <Card.Img variant="top" src={urlFor(heroBanner.image)} />
      </Card>
      <br />
</div>
  )
}

export default HeroBanner