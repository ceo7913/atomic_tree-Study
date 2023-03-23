import React from 'react'
import Faq_list from '../UI/molecules/faq_board/Faq_list'

const Faq_board = () => {
  return (
    <div className='faq_board_frame'>
        <h2 className='text'>FAQ</h2>
        <Faq_list/>
    </div>
  )
}

export default Faq_board