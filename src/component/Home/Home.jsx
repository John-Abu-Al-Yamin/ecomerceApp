import React from 'react'
import './Home.css'
import banner from '../asstes/banner-img.png'
const Home = () => {
  return (
    <div className='hero-banner'>
      <div className="content container">
        <div className="text-content">
          <h1>SALES</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at fuga minima!</p>
          <div className="ctas">
            <button className='banner-cta'>Read More</button>
            <button className='banner-cta-v2'>Shop Now</button>
          </div>
        </div>
        <img src={banner} alt='banner'/>
      </div>
    </div>
  )
}

export default Home
