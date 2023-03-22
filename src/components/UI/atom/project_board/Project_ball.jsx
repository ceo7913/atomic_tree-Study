import React from 'react'
import Block from "../../../../image/block.jpg"

const data =[
    {
        image:Block,
        project_name:"기업 협약 프로젝트",
    },
    {
        image:Block,
        project_name:"기업 협약 프로젝트",
    },
    {
        image:Block,
        project_name:"기업 협약 프로젝트",
    },
    {
        image:Block,
        project_name:"기업 협약 프로젝트",
    },
    {
        image:Block,
        project_name:"기업 협약 프로젝트",
    },
    {
        image:Block,
        project_name:"기업 협약 프로젝트",
    },

]

const Project_ball = () => {
  return (
    <>
    {
        data.map((i)=>(
          <div className='project_ball_frame'>
                <img src={i.image} alt="" className='project_image'/>
              <div className='project_name'>{i.project_name}</div>
          </div>
        ))
    }
    </>
  )
}

export default Project_ball