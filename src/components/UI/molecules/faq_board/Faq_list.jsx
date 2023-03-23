import React from 'react'
import Pluss_button from '../../atom/Pluss_button'

const data = [
    {
        faq_title:"Do you accept Paypal?",
        faq_content:"text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy, text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
        faq_title:"Do you accept Paypal?",
        faq_content:"text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy, text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
        faq_title:"Do you accept Paypal?",
        faq_content:"text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy, text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
        faq_title:"Do you accept Paypal?",
        faq_content:"text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy, text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
]

const Faq_list = () => {
  return (
    <div className='faq_list_frame'>
    {
        data.map((item)=>(
            <div className='faq_box_frame'>
                <div className='faq_box'>{item.faq_title}
                <div className='faq_content'>
                    {item.faq_content}
                </div>
                </div>
                <Pluss_button/>
            </div>
        ))
    }
    </div>
  )
}

export default Faq_list