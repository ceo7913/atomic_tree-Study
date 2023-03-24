import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGhost, faH, faMusic, faTrophy } from '@fortawesome/free-solid-svg-icons';


const data = [
    {
        icon_name:faGithub,
        link_nmae:"GitHub",
        link:"https://github.com/ceo7913"
    },
    {
        icon_name:faTrophy,
        link_nmae:"K-Hackathon",
        link:"https://www.youtube.com/watch?v=xsvH_dClMfg"
    },
    {
        icon_name: faGhost,
        link_nmae:"Paranoia",
        link:"https://youtu.be/ASwnUpL3pC8"
    },
    {
        icon_name:faMusic,
        link_nmae:"NEWSIC",
        link:"http://ceo7913.github.io/NEWSIC-Project-Front/"
    },
]
const Link_box = () => {
  return (
    <>
    {
      data.map((item)=>(
          <div className='link_box_frame'>
              <FontAwesomeIcon icon={item.icon_name}/>
              <div><a href={item.link} style={{textDecoration:"none"}}>{item.link_nmae}</a></div>
          </div>
      ))
    }
    </>
  )
}

export default Link_box