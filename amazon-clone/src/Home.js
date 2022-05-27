import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Clearance/PC-1500X600._CB648065009_.jpg'
         alt='Image telling amazon latest offers'/>
         <div className='home__row'>
             <Product id="122423" title='The lean startup, The must needed startup guide' price={29.99} image={'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg'} rating={4}/>
             <Product id="123332" title='Logitech MK345 Wireless Combo Full-Sized Keyboard with Palm Rest and Comfortable Right-Handed Mouse'
                  price={59.99} image={'https://m.media-amazon.com/images/I/61ltL022OEL._SX679_.jpg'} rating={5}/>
             {/*product component*/}
         </div>
         <div className='home__row'>
             {/*product component*/}
             <Product id='337221' title='Apple iPhone 13 Pro Max (128GB) - Sierra Blue' price={1000}
              image={'https://m.media-amazon.com/images/I/61i8Vjb17SL._SX569_.jpg'} rating={5}/>
             <Product id='234231' title='Dell Alienware m15(R3) 39.62 cm (15.6-inch) UHD Gaming Laptop'
               price={1300} image={'https://m.media-amazon.com/images/I/61m3N4MBaNL._SX522_.jpg'} rating={4}/>
             <Product id='324324' title='NutriEkspert Premium Triple Strength Omega 3 Fish Oil 1650mg with 600Mg EPA & 400Mg DHA - 60 soft gels'
                  price={10} image={'https://m.media-amazon.com/images/I/61IAuzUujrL._SX425_.jpg'} rating={4}/>
             {/*product component*/}
             {/*product component*/}
         </div>
         <div className='home__row'>
             {/*product component*/}
             <Product id='224212' title='Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV'
              price={230} image={'https://m.media-amazon.com/images/I/61NmgnB8MaL._SX679_.jpg'} rating={4}/>
         </div>
        </div>
    </div>
  )
}

export default Home;