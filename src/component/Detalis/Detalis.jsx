import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './Detalis.css'
import { useDispatch } from 'react-redux'
import { addtocard } from '../../rtk/Slices/Card-slice'

const Detalis = () => {

  const dispatch = useDispatch()




    const params = useParams();
    const[detalis ,setdetalis] =useState([]);
    const url= "https://fakestoreapi.com/products"

    useEffect(() => {
        fetch(`${url}/${params.productid}`)
            .then(res=>res.json())
            .then(data=>setdetalis(data))
    },[])

  return (
   <div className="detalis">
    <h3 className='title-detalis'>detalis-Product</h3>
    <div className="container content-detalis">

      <div className="cards-detalis" key={detalis.id}>
        <div className="card-detali">
          <img src={detalis.image} alt="" />
        </div>
        <div className="info-detalis">
          <h2>{detalis.title}</h2>
          <h6>{detalis.description}</h6>
          <h3> Price- {detalis.price} $</h3>
          <button className='btn-add'onClick={() => dispatch(addtocard(detalis))}>Add To Card</button>
        </div>
      </div>

    </div>
   </div> 
  )
  
}

export default Detalis
