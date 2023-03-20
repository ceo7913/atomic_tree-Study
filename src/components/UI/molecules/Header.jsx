import React from 'react'
import { Home_button, Layer_Header_Logo, Menu_button } from '../atom/header'


const Header = () => {
  return (
    <div className='header_frame'>
        <Home_button/>
        <Layer_Header_Logo/>
        <Menu_button/>
    </div>
  )
}

export default Header