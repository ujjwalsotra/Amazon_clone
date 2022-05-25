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
             <Product title='The lean startup' price={29.99} image={'https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg'} rating={4}/>
             <Product/>
             {/*product component*/}
         </div>
         <div className='home__row'>
             {/*product component*/}
             <Product/>
             <Product/>
             <Product/>
             {/*product component*/}
             {/*product component*/}
         </div>
         <div className='home__row'>
             {/*product component*/}
             <Product/>
         </div>
        </div>
    </div>
  )
}

export default Home;