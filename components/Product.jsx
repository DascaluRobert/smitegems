import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({product: { image, slug, price }}) => {

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])}
          width={350}
          height={280}
          className='product-image' />
          <h3 className='product-price'>{price} USD</h3>
        </div>
      </Link>
      </div>
      
  )
}

export default Product