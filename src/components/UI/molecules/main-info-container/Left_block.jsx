import React from 'react'
import { Bottom_section, Top_section } from '../../atom/left_block'

const Left_block = () => {
  return (
    <div className='left_block_frame'>
        <Top_section/>
        <Bottom_section/>
    </div>
  )
}

export default Left_block