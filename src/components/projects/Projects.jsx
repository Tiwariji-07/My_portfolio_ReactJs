import React from 'react'
import './projects.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState,useRef,useEffect } from 'react';
import {motion, useAnimation,useInView} from 'framer-motion';


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

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const animation = useAnimation();
  const animation1 = useAnimation();
  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',duration:1,delay:0
        }
      })
      animation1.start({
        x:0,
        transition:{
          type:'spring',duration:1,delay:0
        }
      })
    }
    if(!inView){
      animation.start({
        x:'-100vw'
      })
      animation1.start({
        x:'100vw'
      })
    }
  },[inView]);
  return (
    <div ref={ref} className='project' id='project'>
        <motion.h1 animate={animation} className='title' viewport={{amount:1}}>
        <span className ='title-blast' aria-hidden="true" >P</span>
          <span className ='title-blast' aria-hidden="true" >r</span>
          <span className ='title-blast' aria-hidden="true" >o</span>
          <span className ='title-blast' aria-hidden="true" >j</span>
          <span className ='title-blast' aria-hidden="true" >e</span>
          <span className ='title-blast' aria-hidden="true" >c</span>
          <span className ='title-blast' aria-hidden="true" >t</span>
          <span className ='title-blast' aria-hidden="true" >s</span>
          <span className ='title-blast' aria-hidden="true" >:</span>
        </motion.h1>
      
      <div className='skills-heading' >
        {/* <div className='skills-heading'>
          <h1 >Projects</h1>
        </div> */}
        <div className="slidebar" style = {{ transform: `translateX(-${currentSlide *100}vw)`}}>
          {data.map((d)=>(
            <div className="container">
              <motion.div className="item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1,transition:'all 5s ease-out',transitionDelay:2 }}
              exit={{  opacity: 0  }} viewport={{amount:.6}}>
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  
                      <a href={d.link} target="_blank" style={{'textDecoration':'none','color':'#14FFEC'
                      }}>
                        View
                      </a>
                    
                  </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </motion.div>
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