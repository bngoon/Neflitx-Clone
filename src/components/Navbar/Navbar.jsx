import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Brow by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search-icon" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="=bell-icon" className='icons'/>
        <div className="navbar-profile">
        <img src={profile_img} alt="profile-img" className='profile'/>
        <img src={caret_icon} alt="caret-icon" />
        <div className="dropdown">
            <p>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
