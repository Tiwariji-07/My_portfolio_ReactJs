import React from 'react'
import './projects.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function Projects() {
  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Portfolio Website",
      desc : "It is a React website which shows my portfolio and skills.",
      img: "/personal.png",
      link: "www.google.com",
      icon:"/portfolio_icon.png",
    },
    {
      id: 2,
      title: "Netflix Clone",
      desc: "It is made using ReactJs, and it is hosted using firebase.",
      img: "/netfl.png",
      link: "https://netflix-clone-vivee.web.app",
      icon:"/netflix_icon.png",
    },
    {
      id: 3,
      title: "Employee Management System",
      desc: "Frontend using ReactJs and backend REST API using Spring Boot.",
      img: "/employee.png",
      link: "https://github.com/Tiwariji-07/EMS_Spring_Rjs",
      icon:"/github.png",
    },
    
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide >0 ? currentSlide-1: data.length-1) : setCurrentSlide(currentSlide< data.length-1 ? currentSlide +1 : 0);

  }
  return (
    <div className='project' id='project'>
        <h1 >Projects</h1>
      
      <div className='skills-heading' >
        {/* <div className='skills-heading'>
          <h1 >Projects</h1>
        </div> */}
        <div className="slidebar" style = {{ transform: `translateX(-${currentSlide *100}vw)`}}>
          {data.map((d)=>(
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  
                      <a href={d.link} target="_blank">Link</a>
                    
                  </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
        </div>
        <ExpandMoreIcon className='arrow left' onClick = {()=> handleClick("left")}/>
        <ExpandMoreIcon className='arrow right' onClick = {()=> handleClick()}/>
        
      </div>
    </div>
  )
}

export default Projects