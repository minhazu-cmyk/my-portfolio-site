import React from 'react';
import './Project.css';
import {FaGithub,FaExternalLinkAlt} from "react-icons/fa";
import doctor from "../../../images/doctor-portal.PNG";
import agnecy from '../../../images/agnecy.png';
import emaJhon from '../../../images/ema-jhon.png';
import travel from '../../../images/travel.PNG';
import burj from '../../../images/burjarab.PNG';
import community from '../../../images/social buddy.PNG';


const Project = () => {
    return (
      <div style={{ marginTop: "60px"}} id="projects">
        <h1 style={{ color: "rgb(81, 233, 157)", textAlign: "center",marginBottom:"100px" }}>
          Some Of <span className="text-white">My Project</span>
        </h1>
        <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={doctor} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Doctors Portal</h5>
      <p class="text-white">A mern-stack project, where you can book the appointment in your preferable day, and a doctor can review his/her appointment so that he/she can prescribe you as well as an admin can add a new doctor and can delete as well.</p>
      <div className="technolog">
      <span >React.js</span> <span >javascript</span> <span className='technology'>css3</span> <span>Bootstrap</span> <span>Firebase-auth</span> <span>
       mongo DB </span> <span>node js </span><span>express js</span><span>heroku</span> <br/><br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk/doctors-portal-client"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://doctors-portal-82bc2.firebaseapp.com/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={agnecy} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Creative Agency</h5>
      <p class="text-white">A complete MERN-Stack project,where client can order any product and review the product item and an admin can add a new product and cancel as well.</p>
      <div className="technolog">
      <span>React.js</span> <span>javascript</span> <span>css</span> <span>Bootstrap</span> <br/> <br/> <span>node js</span> <span>Express js</span>   <span>Firebase-auth</span>  <span>MongoDB</span><span>heroku</span><br/><br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk/creative-agency-client"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://creative-agency-43325.firebaseapp.com/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={emaJhon} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Ema-Jhon</h5>
      <p class="text-white">A full stack E-commerce website, where you can buy some product and you can review your item</p>
      <div className="technolog">
      <span>React.js</span> <span>javascript</span> <span>css3</span><br/><br/> <span>firebase</span> <span>express js</span><span>heroku</span> <span>node js </span><span>mongo DB</span> <br/> <br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk/ema-jhon-simple-auth"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://ema-jhon-simple-acee0.firebaseapp.com/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
</div>

<br/>

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={travel} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Travel Guru</h5>
      <p class="text-white">A tour booking projects,clients can book the tour in different location and can book  the hotel in selected location.</p>
      <div className="technolog">
      <span>React.js</span> <span>javascript</span> <span>css3</span> <span>Bootstrap</span> <span>React-Bootstrap</span> <span>Material-Ui</span>  <br/> <br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk/travel-guru"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://travel-guru-d5bae.firebaseapp.com/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={burj} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>BURJ-AL-ARAB</h5>
      <p class="text-white">A MERN-Stack project, where you can book the different categories hotel room and you can check your reservation details after log in </p> 
        <div className="technolog">
        <span>javascript</span><span>React-Bootstrap</span> <span>React js</span> <span>firebase-Authentication</span> <span>jwt-token</span><span>mongoDB</span><span>node Js</span><span>Express Js</span><span>css</span> <span>Bootstrap</span> <br/><br/>
        </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk/bruj-al-arab"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://burj-al-arab-37f5d.firebaseapp.com/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>fgx
  <div class="card">
    <img class="card-img-top" src={community} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>community-APP</h5>
      <p class="text-white">This is a community app, where people can see different type of post and comment of others people, I have created this website with the help of REST API </p>
      <div className="technolog">
      <span>html5</span> <span >css3</span> <span>Material-ui</span><span>react js</span> <span>REST API</span> <span>netlify</span> <br/> <br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk/community-app"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://gallant-hugle-e40b70.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
</div>

      </div>
    );
};

export default Project;