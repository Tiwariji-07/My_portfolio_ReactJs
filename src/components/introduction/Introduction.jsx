import React from 'react';
import './introduction.scss';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import FileSaver from 'file-saver';

function Introduction() {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/java.png",
      "java.png"
    );};
  return (
    <section className='introduction' id='introduction'>
      <div className='bg'></div>

        <div class="text-zone">
          
          <h1 aria-label=" Hi,  I'm ack,  web developer" class="blast-root"> 
            <span class="blast" aria-hidden="true" >H</span>
            <span class="blast" aria-hidden="true" >i</span>
            <span class="blast" aria-hidden="true" >,</span> 
            <span class="wave" role="img" aria-labelledby="wave">👋🏻</span>
            <br />
            <span class="blast" aria-hidden="true" >I</span>
            <span class="blast" aria-hidden="true" >'</span>
            <span class="blast" aria-hidden="true" >m</span>

            <img src="/v2.png" alt="" />
            <span class="blast" aria-hidden="true" >i</span>
            <span class="blast" aria-hidden="true" >v</span>
            <span class="blast" aria-hidden="true" >e</span>
            <span class="blast" aria-hidden="true" >k</span>
            <span class="blast" aria-hidden="true" >,</span> 
            <br /> 
            <span class="blast" aria-hidden="true" >w</span>
            <span class="blast" aria-hidden="true" >e</span>
            <span class="blast" aria-hidden="true" >b</span> 
            <span class="blast" aria-hidden="true" style={{'padding-left':'1rem'}} >d</span>
            <span class="blast" aria-hidden="true" >e</span>
            <span class="blast" aria-hidden="true" >v</span>
            <span class="blast" aria-hidden="true" >e</span>
            <span class="blast" aria-hidden="true" >l</span>
            <span class="blast" aria-hidden="true" >o</span>
            <span class="blast" aria-hidden="true" >p</span>
            <span class="blast" aria-hidden="true" >e</span>
            <span class="blast" aria-hidden="true" >r</span>
            {/* <span class="blast" aria-hidden="true" >👨‍💻</span> */}
          </h1>
              <p class="gray-text" style={{"font-family":"Open Sans,sans-serif"}}>
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
              <a href='#contact' class="flat-button">
                  <div>
                      <span class="bg"></span>
                      <span class="base"></span>
                      <span class="text">Contact me!</span>
                  </div>
              </a>
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