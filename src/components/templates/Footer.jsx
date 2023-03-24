import React from 'react'
import { Footer_info, Link_box_list } from '../UI/molecules/footer'


const Footer = () => {
  return (
    <div className='footer_frame'>
        <div className='line'/>
        <Link_box_list/>
        <div className='line'/>
        <Footer_info/>
    </div>
  )
}

export default Footer