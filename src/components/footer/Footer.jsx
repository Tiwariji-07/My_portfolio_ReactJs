import React from 'react';
import './footer.scss';
import {motion} from 'framer-motion';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <div className='title'>
            Vivek Raj
        </div>
        <div className='tabs'>
            <a href="#home">Home</a>
            <a href="#introduction">Intro</a>
            <a href="#skills">About Me</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div className='profiles'>
            <motion.button className='btns' whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <a href="https://www.linkedin.com/in/vr384/" target="_blank">
                    <LinkedInIcon className="f-icon"/>
                </a>
            </motion.button>
            <motion.button className='btns' whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <a href="https://github.com/Tiwariji-07" target="_blank">
                    <GitHubIcon className="f-icon"/>
                </a>
            </motion.button>
            <motion.button className='btns' whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <a href="https://api.whatsapp.com/send?phone=6304144730" target="_blank">
                    <WhatsappOutlinedIcon className="f-icon"/>
                </a>
            </motion.button>
        </div>
        <div className='right'>
         ©2022 VIVEK RAJ. All rights reserved.
        </div>
    </div>
  )
}

export default Footer