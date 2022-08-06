import React from 'react'
import './contact.scss';
import {useRef,useState,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, useAnimation,useInView } from "framer-motion"


function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f34m3jd",
        "template_83u3amp",
        formRef.current,
        "d0YXx_dGYFDu5078C"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',duration:1.5,bounce:.5,stiffness:50,
        }
      })
      animation1.start({
        x:0,
        transition:{
          type:'spring',duration:1,delay:0
        }
      })
      animation2.start({
        x:0,
        transition:{
          type:'tween',duration:1,delay:0
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
      animation2.start({
        x:'100vw'
      })
    }
  },[inView]);
  return (
    <div ref={ref} className="c" id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <motion.h1 animate={animation} className="c-title">
          <span className ='c-title-blast' aria-hidden="true" >C</span>
          <span className ='c-title-blast' aria-hidden="true" >o</span>
          <span className ='c-title-blast' aria-hidden="true" >n</span>
          <span className ='c-title-blast' aria-hidden="true" >t</span>
          <span className ='c-title-blast' aria-hidden="true" >a</span>
          <span className ='c-title-blast' aria-hidden="true" >c</span>
          <span className ='c-title-blast' aria-hidden="true" >t</span>
          <span className ='c-title-blast' aria-hidden="true" style={{'margin-left':".7rem"}}>M</span>
          <span className ='c-title-blast' aria-hidden="true" >e</span>
          <span className ='c-title-blast' aria-hidden="true" >:</span>
          </motion.h1>
          <div className="c-info">
            <div className="c-info-item">
              <CallOutlinedIcon className="c-icon"/>
              +91 6304144730
            </div>
            <div className="c-info-item">
              <EmailOutlinedIcon className="c-icon"/>
              viveeraj384@gmail.com
            </div>
            <div className="c-info-item">
              <LocationOnOutlinedIcon className="c-icon"/>
              Hyderabad, Telangana, India
            </div>
            <div className="c-info-item" style={{'width':'50%','borderRadius':'10px','border':'1px solid #14FFEC','marginLeft':'30px'}}>
              <WhatsappOutlinedIcon className="c-icon"/>
              <a style={{'color':'#14FFEC','text-decoration':'none'}} href="https://api.whatsapp.com/send?phone=6304144730" target='_blank' >Send Message!</a>
            </div>
            <div className="c-info-item" style={{'width':'50%','borderRadius':'10px','border':'1px solid #14FFEC','marginLeft':'30px'}}>
              <LinkedInIcon className="c-icon"/>
              <a href="https://www.linkedin.com/in/vr384/" target='_blank' style={{'color':'#14FFEC','text-decoration':'none'}}>Check Profile!</a>
            </div>
            <div className="c-info-item" style={{'width':'50%','borderRadius':'10px','border':'1px solid #14FFEC','marginLeft':'30px'}}>
              <GitHubIcon className="c-icon"/>
              <a href="https://github.com/Tiwariji-07" target='_blank' style={{'color':'#14FFEC','text-decoration':'none'}}>Check Profile!</a>
            </div>
            <div className="c-info-item" style={{'width':'50%','borderRadius':'10px','border':'1px solid #14FFEC','marginLeft':'30px'}}>
              <img src="./leet.png" alt="" className='c-icon' style={{'height':'25px','width':'25px'}}/>
              <a href="https://leetcode.com/Tiwari_ji07/" target='_blank' style={{'color':'#14FFEC','text-decoration':'none'}}>Check Profile!</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <motion.p className="c-desc" animate={animation1} viewport={{amount:1}}>
             I’m interested in Software Development opportunities. 
             However, if you have other request or question or if you just want to say something, don’t hesitate to use the form.
          </motion.p>
          <motion.form ref={formRef} onSubmit={handleSubmit} animate={animation2} viewport={{amount:.6}}>
            <input  type="text" placeholder="Name" name="user_name" />
            <span className='border'></span>
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="email" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <br />
            <br />
            <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>Send</motion.button>
            {done && "  Thank you..."}
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact