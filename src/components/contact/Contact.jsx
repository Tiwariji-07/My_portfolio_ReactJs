import React from 'react'
import './contact.scss';
import {useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
  return (
    <div className="c" id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
          <span className ='c-title-blast' aria-hidden="true" >C</span>
          <span className ='c-title-blast' aria-hidden="true" >o</span>
          <span className ='c-title-blast' aria-hidden="true" >n</span>
          <span className ='c-title-blast' aria-hidden="true" >t</span>
          <span className ='c-title-blast' aria-hidden="true" >a</span>
          <span className ='c-title-blast' aria-hidden="true" >c</span>
          <span className ='c-title-blast' aria-hidden="true" >t</span>
          <span className ='c-title-blast' aria-hidden="true" style={{'margin-left':"1rem"}}>M</span>
          <span className ='c-title-blast' aria-hidden="true" >e</span>
          <span className ='c-title-blast' aria-hidden="true" >:</span>
          </h1>
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
              <a style={{'color':'#14FFEC','text-decoration':'none'}} href="https://api.whatsapp.com/send?phone=6304144730" target='_blank'>Send Message!</a>
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
              <a href="https://github.com/Tiwariji-07" target='_blank' style={{'color':'#14FFEC','text-decoration':'none'}}>Check Profile!</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
             I’m interested in Software Development opportunities. However, if you have other request or question, don’t hesitate to use the form.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <span className='border'></span>
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="email" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <br />
            <button>Send</button>
            {done && "  Thank you..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact