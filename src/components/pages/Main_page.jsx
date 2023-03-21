import React from 'react'
import { Home_board, Skill_board } from '../templates'



const Main_page = () => {
  return (
    <div className='main_page_frame'>
        <Home_board/>
        <Skill_board/>
    </div>
  )
}

export default Main_page