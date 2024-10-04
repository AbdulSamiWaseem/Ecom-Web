import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'

const header = () => {
  return (
    <div className='header'>
        <div className='wrap'>
            <img src={logo} alt='logo'/>
        </div>
      
    </div>
  )
}

export default header
