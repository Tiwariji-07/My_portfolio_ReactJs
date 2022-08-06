import {React,useEffect,useRef} from 'react';
import './introduction.scss';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import FileSaver from 'file-saver';
import {motion, useAnimation,useInView} from 'framer-motion';

function Introduction() {
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const animation = useAnimation();
  useEffect(()=>{
    if(inView){
      animation.start({
        y:0,
        transition:{
          type:'spring',duration:1.5,bounce:.5,stiffness:50,
        }
      })
    }
    if(!inView){
      animation.start({
        y:'-100vh'
      })
    }
  },[inView]);

  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/java.png",
      "java.png"
    );};

  return (
    <section ref={ref} className='introduction' id='introduction'>

        
        <div className="text-zone">
          
          <h1 aria-label=" Hi,  I'm ack,  web developer" class="blast-root"> 
            <motion.span animate={animation} className="blast" aria-hidden="true" >H</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >i</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >,</motion.span> 
            <br />
            <motion.span animate={animation} className="blast" aria-hidden="true" >I</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >'</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >m</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" style={{'padding-left':'.6rem','color':'#0D7377'}} >V</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" style={{'color':'#0D7377'}}>i</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" style={{'color':'#0D7377'}}>v</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" style={{'color':'#0D7377'}}>e</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" style={{'color':'#0D7377'}}>k</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >,</motion.span> 
            <br /> 
            <motion.span animate={animation} className="blast" aria-hidden="true" >w</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >e</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >b</motion.span> 
            <motion.span animate={animation} className="blast" aria-hidden="true" style={{'padding-left':'.6rem'}} >d</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >e</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >v</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >e</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >l</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >o</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >p</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >e</motion.span>
            <motion.span animate={animation} className="blast" aria-hidden="true" >r</motion.span>
            {/* <span className="blast" aria-hidden="true" >👨‍💻</span> */}
          </h1>
              <p className="gray-text" style={{"font-family":"Open Sans,sans-serif"}}>
              <Typewriter
               options={{ 
                strings:["CS Undergraduate","Developer", "Runner"],
                autoStart:true,
                delay:75,
                pauseFor:1500,
                loop:true
                }}
            />
              </p>

              <br/>
              <motion.a href='#contact' className="flat-button" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
                  <div>
                      <span className="bg"></span>
                      <span className="base"></span>
                      <span className="text">Contact me!</span>
                  </div>
              </motion.a>
              {/* <button className="cv" onClick={saveFile}>
    Download File
</button> */}
        </div>

        <canvas id="canvas" width="1680" height="907"></canvas>

        <div class="scroll-down">
            <span>scroll down</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg>
        </div>

        <div class="scroll-down scroll-down--left">
            <span>scroll down</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg>
        </div>

      
    </section>
  )
}

export default Introduction;