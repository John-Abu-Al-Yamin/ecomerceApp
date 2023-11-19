import React from 'react'
import ban from '../asstes/banner-img.png'
import './Products.css'
const Products = () => {
  return (
    <div className='products'>
        <h1>Catagories</h1>
      <div className="products-content container">
      <div className="cards-products">
          <div className="card-products">
            <img src={ban} alt="" />
          </div>
        </div>
        <div className="cards-products">
          <div className="card-products">
            <img src={ban} alt="" />
          </div>
        </div>
        <div className="cards-products">
          <div className="card-products">
            <img src={ban} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
