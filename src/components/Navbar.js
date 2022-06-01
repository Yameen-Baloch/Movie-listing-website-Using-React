import React from 'react'
import { Link } from 'react-router-dom'
import Yameen from '../Images/Yameen.jpeg'
import '../components/Navbar.scss'

const Navbar = () => {
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'> Movie App</div>
      </Link>
      <div className='user-img'>
        <img src={ Yameen } alt="user-image" />
      </div>
      
    </div>
  )
}  

export default Navbar