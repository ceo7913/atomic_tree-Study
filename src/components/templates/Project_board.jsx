import React from 'react'
import { Project_text, View_all_button } from '../UI/atom/project_board'
import Project_ball_list from '../UI/molecules/project_board/Project_ball_list'

const Project_board = () => {
  return (
    <div className='project_board_frame'>
        <Project_text/>
        <Project_ball_list/>
        <View_all_button/>
    </div>
  )
}

export default Project_board