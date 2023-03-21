import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faBootstrap, faCss3Alt, faFigma, faGithub, faHtml5, faJsSquare, faNodeJs, faReact, faSass, faSlack, faTrello } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const data = [
    {
      skill_name: 'REACT',
      skill_icon: faReact,
      color: '#02D6F2',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'HTML5',
      skill_icon: faHtml5,
      color: '#F22E02',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'CSS3',
      skill_icon: faCss3Alt,
      color: 'blue',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'JAVASCRIPT',
      skill_icon: faJsSquare,
      color: 'yellow',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'SASS',
      skill_icon: faSass,
      color: '#D936B3',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'NODE.JS',
      skill_icon: faNodeJs,
      color: '#32b916',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'BOOTSTRAP',
      skill_icon: faBootstrap,
      color: '#ba02f2',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'FIGMA',
      skill_icon: faFigma,
      color: '#d47b32',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'GITHUB',
      skill_icon: faGithub,
      color: '#000000',
      background_color: 'rgba(0, 0, 0, 0.1)',
    },
    {
      skill_name: 'AMAZONAWS',
      skill_icon: faAmazon,
      color: '#cb8d2a',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'SLACK',
      skill_icon: faSlack,
      color: '#6b1462',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'TRELLO',
      skill_icon: faTrello,
      color: '#4d0b99',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'CSS3',
      skill_icon: faCss3Alt,
      color: 'blue',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'JavaScript',
      skill_icon: faJsSquare,
      color: 'yellow',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'React',
      skill_icon: faReact,
      color: '#02D6F2',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'HTML5',
      skill_icon: faHtml5,
      color: '#F22E02',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'CSS3',
      skill_icon: faCss3Alt,
      color: 'blue',
      background_color: 'rgba(0,0,0,0.1)',
    },
    {
      skill_name: 'JavaScript',
      skill_icon: faJsSquare,
      color: 'yellow',
      background_color: 'rgba(0,0,0,0.1)',
    },
  ];
const Stack = () => {
  return (
    <>
      {
          data.map((item)=>(
            <div className='stack_frame'>
                <FontAwesomeIcon className='logo' icon={item.skill_icon} style={{ color: item.color,backgroundColor: item.background_color }}/>
                <div className='skill_name'>{item.skill_name}</div>
            </div>
            ))
        }
  </>
  )
}

export default Stack