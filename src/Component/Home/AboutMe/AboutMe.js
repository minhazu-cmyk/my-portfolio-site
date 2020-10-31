import React from 'react';
import minhaj from '../Resumi/amrpic.jpg';

import "./AboutMe.css"
const AboutMe = () => {
    return (
        <div style={{ marginTop: "60px"}} id='AboutUs'>
             <h1 style={{ color:'white', textAlign: "center",marginBottom:"80px" }}>
             About <span style={{ color: "rgb(81, 233, 157)"}}>Me </span>
        </h1>
       <div className="row">
            <div className="col-md-6">
              <img style={{height:'200px',margin:'0 auto',marginBottom:'15px',borderRadius:'50%'}} src={minhaj} alt=""/>
              <h2 className='text-white'> <span style={{color:'rgb(81, 233, 157)'}}>I'am</span> Minhazul Abedin</h2>
             <p className='text-white mb-3'>I am a self taught frontend-developer, i can balance between functional and aesthetic design. i am having expertise in modern front-end technologies and a deep interest in javascript. i desire to work in the software industry with a good learning environment to grow my skills to the next level
             .</p>
           </div>
           <div className="col-md-6"> 
             <h3 className='text-white'>My programming skill</h3>
              <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
              <div className='technolog'>
                <span>React.js</span>
                <span>javascript</span>
                <span>bootstrap4</span>
                <span>React bootstrap</span>
                <span>Material-Ui</span><br/><br/>
                <span>ES6</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>mongodb</span>
                <span>firebase</span><br/><br/>
                <span>Heroku</span>
                <span>Vs code</span>
                <span>Gatsby js</span>
              </div>
                </div>
              
       </div>
        </div>
    );
};

export default AboutMe;