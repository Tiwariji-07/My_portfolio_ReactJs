import {React,useEffect,useRef} from 'react';
import './skills.scss';
import TagCloud from 'TagCloud';
import {motion, useAnimation,useInView} from 'framer-motion';

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
const myTags = [
  'JavaScript', 'CSS', 'HTML',
  'C', 'C++', 'React',
  'Python', 'Java', 'git',
  'django', 'Node.js', 'OpenCV',
  'GCP', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.container', myTags,{

// radius in px
radius: 250,

// animation speed
// slow, normal, fast
maxSpeed: 'fast',
initSpeed: 'fast',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,

// interact with cursor move on mouse out
keep: true

});
function Skills() {
//   const myTags = [
//     'JavaScript', 'CSS', 'HTML',
//     'C', 'C++', 'React',
//     'Python', 'Java', 'git',
//     'django', 'Node.js', 'OpenCV',
//     'GCP', 'MySQL', 'jQuery',
// ];

// var tagCloud = TagCloud('.container', myTags,{

//   // radius in px
//   radius: 250,

//   // animation speed
//   // slow, normal, fast
//   maxSpeed: 'fast',
//   initSpeed: 'fast',

//   // 0 = top
//   // 90 = left
//   // 135 = right-bottom
//   direction: 135,
  
//   // interact with cursor move on mouse out
//   keep: true
  
// });
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// // document.querySelector('.content').style.color = random_color;

// const TagCloud = require('TagCloud');

// const container = '#conatiner' ;
// const texts = [
//     '3D', 'TagCloud', 'JavaScript',
//     'CSS3', 'Animation', 'Interactive',
//     'Mouse', 'Rolling', 'Sphere',
//     '6KB', 'v2.x',
// ];
// const options = {};
const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const animation = useAnimation();
  const animation2 = useAnimation();
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
      animation2.start({
        x:100,
        transitionDelay:5
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
        opacity:0
      })
    }
  },[inView]);

  return (
    <div className='skills' id='skills'>
  
      
        <div ref={ref} className="s-left">
          <motion.h1 animate={animation} className="title" viewport={{amount:1,once:true}}>
          {/* <span className ='title-blast' aria-hidden="true" >M</span>
          <span className ='title-blast' aria-hidden="true" >y</span>
          <span className ='title-blast' aria-hidden="true" >s</span>
          <span className ='title-blast' aria-hidden="true" >e</span>
          <span className ='title-blast' aria-hidden="true" >l</span>
          <span className ='title-blast' aria-hidden="true" >f</span>
          <span className ='title-blast' aria-hidden="true" style={{'margin-left':"1rem"}}>&</span>
          <br /> */}
          <span className ='title-blast' aria-hidden="true" >M</span>
          <span className ='title-blast' aria-hidden="true" >y</span>
          <span className ='title-blast' aria-hidden="true" style={{'margin-left':".7rem"}}>S</span>
          <span className ='title-blast' aria-hidden="true" >k</span>
          <span className ='title-blast' aria-hidden="true" >i</span>
          <span className ='title-blast' aria-hidden="true" >l</span>
          <span className ='title-blast' aria-hidden="true" >l</span>
          <span className ='title-blast' aria-hidden="true" >s</span>
          <span className ='title-blast' aria-hidden="true" >:</span>
          </motion.h1>
          <motion.div className="info" initial={{ opacity: 0 }}
        whileInView={{ opacity: 1,transition:'all 5s ease-out',transitionDelay:2 }}
        exit={{  opacity: 0  }} viewport={{amount:.6}}>
          <div className="info-item" >
              <img src="/java.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #c287e8 70%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/python.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #e6adec 80%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/sql.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #f75590 65%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/html.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #ff4e00 90%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/css.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #8ea604 75%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/react.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #f5bb00 60%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/api.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #574ae2 70%, #323232 50%)`}}></div>
            </div>
            <div className="info-item" >
              <img src="/git.png" alt="" className='icon'/>
              <div className='box' style={{'background':`linear-gradient(to right, #893168 40%, #323232 50%)`}}></div>
            </div>
            
          </motion.div>
        </div>
        <div className="s-right">
          <motion.h1 className="title" animate={animation1} viewport={{amount:1,once:true}}>
            <span className ='title-blast' aria-hidden="true" >M</span>
            <span className ='title-blast' aria-hidden="true" >e</span>
            <span className ='title-blast' aria-hidden="true" style={{'margin-left':".7rem"}}>&</span>
            <span className ='title-blast' aria-hidden="true" style={{'margin-left':".7rem"}}>M</span>
            <span className ='title-blast' aria-hidden="true" >y</span>
            <span className ='title-blast' aria-hidden="true" >s</span>
            <span className ='title-blast' aria-hidden="true" >e</span>
            <span className ='title-blast' aria-hidden="true" >l</span>
            <span className ='title-blast' aria-hidden="true" >f</span>
            <span className ='title-blast' aria-hidden="true" >:</span>
          </motion.h1>
          <motion.p  style={{'color':'#ee9ca7'}} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1,transition:'all 3s ease-in',transitionDelay:.2 }}
        exit={{  opacity: 0  }}
        viewport={{amount:1}}>Namaste!!</motion.p>
          <motion.p initial={{ opacity: 0 }}
        whileInView={{ opacity: 1,transition:'all 1s ease-in',transitionDelay:2 }}
        exit={{ opacity: 0 }}
        viewport={{amount:.75}}>A results-driven individual seeking an Entry-level position in the field of Software Development. 
            Currently pursuing B.Tech in Computer Science and Engineering from 
            <a href="https://mrcet.com/" target='_blank' style={{'color':'#14FFEC','textDecoration':'none','marginLeft':'.5rem'}}>Malla Reddy College of Engineering and Technology</a>. 
            Good knowledge of Python, HTML, CSS, JavaScript, React Js and Spring Boot. 
            Seeking an Internship or a Full-time opportunity as a Software Developer to pursue my passion for solving problems.
          </motion.p>
          <motion.p initial={{ opacity: 0 }}
        whileInView={{ opacity: 1,transition:'all 1s ease-in',transitionDelay:.6 }}
        exit={{  opacity: 0  }}
        viewport={{amount:1}}>Wanna talk?  <a href="#contact" style={{'color':'#14FFEC','textDecoration':'none','marginLeft':'1rem'}}>  Send message!</a></motion.p>
        </div>
    </div>
    
  )
}

export default Skills