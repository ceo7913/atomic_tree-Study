import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Home_button = () => {
    return (
        <div className='home_button_frame'>
          <FontAwesomeIcon icon={faHome} className="home_icon"/>
        </div>
    ) 
}
 
export default Home_button