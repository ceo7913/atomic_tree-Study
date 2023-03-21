import React from 'react'

const data =[
    {
        text:"To CREATE"
    },
    {
        text:"SOMETHING WITH"
    },
    {
        text:"INTELLIGENCE"
    },
    {
        text:"AND SKILL"
    },
]
const Info_text = () => {
  return (
    <div className='info_text_frame'>
        {
            data.map((item)=>(
                <div className='text'>
                    {item.text}
                </div>
            ))
        }
    </div>
  ) 
}

export default Info_text