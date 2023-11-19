import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import {AiOutlineHome} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Nav = () => {

  const card = useSelector(state => state.card);

  const [shownav ,setshownav]=useState('show')
  return (
    <header className='main-header'>
      <div className="header-content">
        <ul className='left'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/card">card-{card.length}</Link></li>
          
        </ul>
        <div className="center">
          REACT-JS-STORE
        </div>
        <div className="rigth">
        <Link to='/'><AiOutlineHome size={20}/></Link>
          
          
          <span className='cart-icon'>
          <Link to="/card"><BsCart2 size={20}/></Link>
            
            <span> {card.length} </span>
            </span>
        </div>
      </div>
    </header>
  )
}

export default Nav
