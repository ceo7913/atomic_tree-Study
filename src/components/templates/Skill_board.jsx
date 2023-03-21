import React from 'react'
import Info_text from '../UI/atom/Skill_board/Info_text'
import Stack_wrap from '../UI/molecules/skill_board/Stack_wrap'

const Skill_board = () => {
  return (
    <div className='skill_board_frame'>
        <Info_text/>
        <Stack_wrap/>
    </div>
  )
}

export default Skill_board