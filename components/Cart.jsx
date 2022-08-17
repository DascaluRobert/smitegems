import React, {useRef} from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import emailjs from '@emailjs/browser';

const Cart = () => {
  const form = useRef();
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  let order = 'Order: '
  cartItems.map((item) => (order += item.name + '-' + item.quantity + '; '))

  const handleCheckout = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_zkb617k', 'template_8vtvhvb', form.current, '409u417Dx0gC_kmEv')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    // const stripe = await getStripe();

    // const response = await fetch('/api/stripe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(cartItems),
    // });

    // if(response.statusCode === 500) return;

    // const data = await response.json();

    // toast.loading('Redirecting...');

    // stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
        type='button'
        className='cart-heading'
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3>Your shopping cart is empty</h3>
            <Link href='/'>
              <button
              type='button'
              onClick={() => setShowCart(false)}
              className='btn'>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >=1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image'/>
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                  <p className='quantity-desc'>
                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                        <AiOutlineMinus /></span>                        
                        <span className='num'
                        onClick=''>{item.quantity}</span>                        
                        <span className='plus'
                        onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button type='button' className='remove-item'
                  onClick={() => onRemove(item)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
        <div>Add your details below:
          <br></br>
          <form ref={form} onSubmit={handleCheckout}>
            <label> Email: </label>
              <input type="text" name="email" />
            <br></br>
            <input type='hidden' name='order' value={order} />
            <label> HI-REZ username: </label>
              <input type="text" name="hirezu" />
            <br></br>
            <label> HI-REZ password: </label>
              <input type="password" name="hirezp" />
            <br></br>
            <label> Discord username: </label>
              <input type="text" name="discord" />
            <br></br>
            <label> Aditional infos: </label>
              <input type="text" name="info" />
            <br></br>

            <input type='submit' className='btn' value='Pay with Stripe'/>
          </form>
        </div>
        )}
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            
            <div className='btn-container'>
              
              <div className='orpaypal' >
                Contact me on discord for paypal payment - HappyTree#9213
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart