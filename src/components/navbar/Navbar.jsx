import React from 'react';
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <a href="#introduction">
        <HomeOutlinedIcon className='item'/>
        </a>
        <a href="#skills">
        <PersonOutlineOutlinedIcon className='item'/>
        </a>
        <a href="#project">
        <DeveloperModeOutlinedIcon className='item'/>
        </a>
        <a href="#contact">
        <SendOutlinedIcon className='item'/>
        </a>

      </div>

    </div>
  )
}

export default Navbar