import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const View_all_button = () => {
  return (
    <div className='view_all_button_frame'>
        <div>View All</div>
        <FontAwesomeIcon icon={faArrowRight} style={{width:"25px", height:"25px",color:"#FF7B00"}}/>
    </div>
  )
}

export default View_all_button