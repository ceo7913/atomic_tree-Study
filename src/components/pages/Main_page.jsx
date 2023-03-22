import React from 'react'
import { Home_board, Skill_board, Faq_board, Project_board } from '../templates'




const Main_page = () => {
  return (
    <div className='main_page_frame'>
        <Home_board/>
        <Skill_board/>
        <Project_board/>
        <Faq_board/>
    </div>
  )
}

export default Main_page