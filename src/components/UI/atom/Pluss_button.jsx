import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Pluss_button = () => {
  return (
    <div className='pluss_button_frame'>
        <FontAwesomeIcon icon={faPlus} className="pluss_button"/>
    </div>
  )
}

export default Pluss_button