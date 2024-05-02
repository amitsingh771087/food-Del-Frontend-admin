import React from 'react'
import './NavBar.css'
import {assets} from "../../assets/assets.js"

const NavBar = () => {
  return (
    <div className='navbar'>

    <img className='logo' src={assets.logo} alt="logo" />
    <img className='profile' src={assets.profile_image} alt="profile" />

    </div>
  )
}

export default NavBar