import React from 'react';
import './skills.scss';
import TagCloud from 'TagCloud';
import { SkillBar } from 'react-skills';

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


  return (
    <div className='skills'>
  
      
        <div className="s-left">
          <h1 className="title">
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
          <span className ='title-blast' aria-hidden="true" style={{'margin-left':"1rem"}}>S</span>
          <span className ='title-blast' aria-hidden="true" >k</span>
          <span className ='title-blast' aria-hidden="true" >i</span>
          <span className ='title-blast' aria-hidden="true" >l</span>
          <span className ='title-blast' aria-hidden="true" >l</span>
          <span className ='title-blast' aria-hidden="true" >s</span>
          <span className ='title-blast' aria-hidden="true" style={{'margin-left':"1rem"}}>:</span>
          </h1>
          <div className="info">
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
            
          </div>
        </div>
        <div className="s-right">
          <h1 className="title">
            <span className ='title-blast' aria-hidden="true" >M</span>
            <span className ='title-blast' aria-hidden="true" >e</span>
            <span className ='title-blast' aria-hidden="true" style={{'margin-left':"1rem"}}>&</span>
            <span className ='title-blast' aria-hidden="true" style={{'margin-left':"1rem"}}>M</span>
            <span className ='title-blast' aria-hidden="true" >y</span>
            <span className ='title-blast' aria-hidden="true" >s</span>
            <span className ='title-blast' aria-hidden="true" >e</span>
            <span className ='title-blast' aria-hidden="true" >l</span>
            <span className ='title-blast' aria-hidden="true" >f</span>
          </h1>
          <p style={{'color':'#ee9ca7'}}>Namaste!!</p>
          <p>A results-driven individual seeking an Entry-level position in the field of Software Development. 
            Currently pursuing B.Tech in Computer Science and Engineering from 
            <a href="https://mrcet.com/" target='_blank' style={{'color':'#14FFEC','textDecoration':'none','marginLeft':'.5rem'}}>Malla Reddy College of Engineering and Technology</a>. 
            Good knowledge of Python, HTML, CSS, JavaScript, React Js and Spring Boot. 
            Seeking an Internship or a Full-time opportunity as a Software Developer to pursue my passion for solving problems.
          </p>
          <p>Wanna talk?  <a href="#contact" style={{'color':'#14FFEC','textDecoration':'none','marginLeft':'1rem'}}>  Send message!</a></p>
        </div>
    </div>
    
  )
}

export default Skills