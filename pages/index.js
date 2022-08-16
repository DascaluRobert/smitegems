import React from 'react';

import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner} from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <div className='products-heading'>
        <h2>Smite Cheap Gems</h2>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <div className='products-heading'>
        <h2>Frequently asked questions</h2>
      </div>
      <div className='banner-under'>
          <div className='banner-under2'>
            <p>1. How long until i get the gems?</p> 
      </div>
        <br></br> 
        <p>You will receive your gems in less than 24hours, if you want to get them even faster, contact me on my discord. HappyTree#9213</p>   


        <div className='banner-under2'>
            <p>2. How does the process work?</p> 
        </div>
        <br></br> 
        <p>After the payment is done, i will enter your account to get you the gems. Don't worry i always check if you are online so i don't kick you out of your games.</p>   

        <div className='banner-under2'>
            <p>3. Is it safe?</p> 
        </div>
        <br></br> 
        <p>I 100% guarantee that your account is safe and you don't risk ban, read the "Doubts" section for more.</p>   

        <div className='banner-under2'>
            <p>4. On what platforms are the gems available?</p> 
        </div>
        <br></br> 
        <p>PC, XBOX, NINTENDO.</p>   

        <div className='banner-under2'>
            <p>5. Does it work if i have my steam linked?</p> 
        </div>
        <br></br> 
        <p>Yes, i can get gems for you even if you have your account steamlocked.</p>   

      </div>

      <div className='products-heading'>
        <h2>Doubts</h2>
      </div>
      <div className='banner-under'>

      <div className='banner-under2'>
            <p>Why would you trust me?</p> 
          </div>
        <br></br> 
        <p>It is a very good question and i will try my best to eliminate any doubts you have with logic and proofs.</p>   
        <br></br> 
        <p>Before i display here a bunch of pictures with clients conversations, i want you to understand a few things.</p>  

        <div className='banner-under2'>
            <p>How do you know i won't run with your money?</p> 
        </div>
        <br></br> 
        <p>I make alot more money if you are a happy customer and you keep buying from me so i have no intention of running with your money or getting your account banned or anything, it would only hurt my profits so it makes more sense for me to get you the gems so you keep buying from me and we both make profit. I get more profit, you get gems much cheaper.</p>  

        <div className='banner-under2'>
            <p>How do you know i won't steal your account?</p> 
        </div>
        <br></br> 
        <p>The argument provided before makes sense here too, but in addition i want to say that even if i wanted to steal your account i couldn't. I only ask for your hi rez login credentials, and that is not enough to take ownership of an account, i would need your email and password too, which i don't ask or need. So let's say i would change your email or password, you can make a ticket to hi rez saying that your account was stolen and they will give you an email to the mail that the account was created with so the mail before the change to confirm that your are the owner of the original email that the account was created with. If you don't believe me, try yourself to steal your own account and you'll see you can't.</p>  

        <div className='banner-under2'>
            <p>Do you have any other doubts?</p> 
        </div>
        <br></br> 
        <p>I am open to any ways to help you gain trust, if you have any questions contact me on my discord. HappyTree#9213</p>  


      </div>
      

      <div className='products-heading'>
        <h2>Proofs</h2>
      </div>
      <div className='banner-under'>
      <br></br> 
        <p>Note: names and account details are covered for customer confidentiality</p>  
        
      </div>


      <div className='products-heading'>
        <h2>Last words</h2>
      </div>
      <div className='banner-under'>  
        <p>If you still don't know if you can trust to buy gems it is totally understandable, i recommend you buy a small amount first so you see it works and it is safe, if you have any other questions feel free to contact me on my discord HappyTree#9213 we can talk here about anything that concerns you, we can talk on call, i am open to help you understand that this is safe and beneficial to both of us with no risks included.</p>    
      </div>

    </>
  )
}

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
