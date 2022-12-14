import React, {useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order! </h2>
            <p className='email-msg'>Contact me on discord HappyTree#9213 for any additional information</p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>
                    Continue shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success