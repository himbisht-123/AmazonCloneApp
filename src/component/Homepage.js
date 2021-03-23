import React from 'react'
import '../styling/Homepage.css';
import Product from './Product';
const  Homepage=()=>{
    return (
        <div className="home">
           <div className="home-container">
             <img src="https://wallpapercave.com/wp/wp3144881.jpg"
             className="home-banner" alt=""></img>
           
           </div>
           
           <div className="home-row">
            <Product 
            id="123456"
            title='The Girl in Room 105- which is followed by One Arranged Murder its a Sequel(By Chetan Bhagat)'
            price={'29.99'}
            image="https://m.media-amazon.com/images/I/51gJGVE+tsL._AC_UY218_.jpg"
            rating={4}/>
            <Product  
            id="49538094"
            title=' Balzano High Speed Nutri Blender/Mixer/Smoothie Maker - 1200 Watts - 9 Pcs Set '
            price={'238.0'}
            image='https://m.media-amazon.com/images/I/712jgMV+G3L._AC_UY218_.jpg'
            rating={3}
            />
            
           </div>

           <div className="home-row">
           <Product
           id="34567"
           title='realme Fashion Thermo Plastic Polyurethane 1.4" Large HD Color Display, Full Touch Screen, SpO2, Continuous Heart Rate Monitor Watch (Black)'
           price={'199'}
           rating={4}
           image='https://m.media-amazon.com/images/I/71pYXdg9+IL._AC_UY218_.jpg'
           />
           <Product
           id="56789"
           title='  All-new Echo Dot (4th Gen) with clock |smart speaker with improved bass, LED display and Alexa (Blue)'
           price={'95.6'}
           rating={5}
           image='https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg'
           /> 
           <Product
           id="987345"
           title='Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey'
           price={'2705.6'}
           rating={4}
           image='https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg'
           />
           </div>
           <div className="home-row">
           <Product
           id="4235678"
           title='Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)'
           price={'475.0'}
           rating={5}
           image='https://m.media-amazon.com/images/I/81lpllAGcBL._AC_UY218_.jpg'
           />
           </div>
        </div>
    )
}

export default Homepage
