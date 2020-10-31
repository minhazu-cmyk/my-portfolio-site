import React from 'react';
import minhaj from './amrpic.jpg';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './Resumi.css'
import animation from "../../../images/animation.gif"
import resume from "./Resume (3).pdf"
const Resumi = () => {
    return (  
       
        <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
            <HeaderNavbar></HeaderNavbar><br/><br/>
            <div className='container pb-5'>

<section class='resumi-aria'>
<div className="row d-flex align-items-center">
     <div className="col-md-6">
     <a href={resume} download='resume' ><button className='btn btn-danger text-white pd-4 mr-auto'>Download CV</button></a>
     <h1> MD MINHAZUL ABEDIN</h1>
   <h3 className='mb-4'>Front-end Developer</h3>
   <h5><b> Address</b><span className="h6 pl-3">:
    RUA DR FREDERICO RAMOS MENDES N41 8500-018 ALVOR </span></h5>
   <h5><b> Email</b><span className="h6 pl-5">: minhajabedin341@gmail.com </span></h5>
   <h5><b> Phone</b><span className="h6 pl-5">:  +351 920549397 </span></h5>
   <h5><b> Github</b><span className="h6 pl-4"> <a href=" https://github.com/minhazu-cmyk">: https://github.com/minhazu-cmyk</a> </span></h5>
   <h5><b>Linkedin</b><span className="h6 pl-3"> <a href=" https://www.linkedin.com/in/minhazul-abedin-924260143/">:  https://www.linkedin.com/in/minhazul-abedin-924260143/</a> </span></h5>
     </div>
     <div className="col-md-6">
       <img style={{ height:'200px', paddingLeft:'40px'}} src={minhaj} alt=""/>
     </div>
 </div>
 <hr/>
  <h4><u>Summary</u></h4>
   <p>I am a self taught frontend-developer, i can balance between functional and aesthetic design.i have some knowledge about backend technology and i have done some project using backend technology.</p>
  <h4><u>Programming Knowledge</u></h4>
  <h5><b> Expertise  </b><span className="h6 pl-5">: JavaScript, ES6, React.js, REST API, React Bootstrap, Bootstrap4,
HTML5, CSS3 </span> </h5>
  <h5><b> Comfortable    </b><span className="h6 pl-3">: Gatsby.js, Material UI,Node.js, Express.js, EJS, MongoDB, JSON.</span></h5>
  <h5><b className='pr-3'> Familiar    </b><span className="h6 pl-5">:  Redux.js,GraphQL,React Native</span></h5>
  <h5><b className='pr-4'> Tools </b><span className="h6 pl-5 pb-5">: Git, Create React App, NPM, VS Code, Chrome Dev tool,Firebase, Netlify,
Heroku</span></h5><br/>
   
  <h4><u>Work Experience</u></h4>
  <h5>Doctors Portal:</h5>
  <h5><b>Technology used  </b><span className="h6 pl-5">: React.js, firebase authentication, CSS, Bootstrap4,mongo DB ,node js ,express js, heroku </span> </h5>
  <h5><b>Project details  </b><span className="h6 pl-5">: A mern-stack project, where you can book the appointment in your preferable day, and a doctor can review his/her appointments so that he/she can prescribe you as well as an admin can add a new doctor and can delete as well </span></h5>
  <h5><b>github</b><span className="h6 pl-4"> <a href="https://github.com/minhazu-cmyk/doctors-portal-client">: https://github.com/minhazu-cmyk/doctors-portal-client</a> </span></h5>
  <h5><b>site link</b><span className="h6 pl-4"> <a href=" https://doctors-portal-82bc2.firebaseapp.com/">:  https://doctors-portal-82bc2.firebaseapp.com/</a> </span></h5><br/>
   
   <h5>Creative Agency</h5>
   <h5><b>Technology used  </b><span className="h6 pl-5">: React.js, firebase authentication,Bootstrap4,Material ui,React bootstrap,react hook  from,Heroku,node.js,express.js</span></h5>
  <h5><b>Project details  </b><span className="h6 pl-5">: A complete MERN-Stack project,where client can order any product and review the product item and an admin can add a new product and cancel as well </span></h5>
  <h5><b>github</b><span className="h6 pl-4"> <a href="https://github.com/minhazu-cmyk/creative-agency-client">: https://github.com/minhazu-cmyk/creative-agency-client</a> </span></h5>
  <h5><b>site link</b><span className="h6 pl-4"> <a href="  https://creative-agency-43325.firebaseapp.com/">: https://creative-agency-43325.firebaseapp.com/</a> </span></h5><br/>

  <h5>EMA-JHON</h5>
   <h5><b>Technology used  </b><span className="h6 pl-5">: React.js ,javascript ,css3 ,firebase-Authentication express js ,heroku, node js ,mongo DB  </span></h5>
  <h5><b>Project details  </b><span className="h6 pl-5">: A full stack E-commerce website, where you can buy some product and you can review your item.</span></h5>
  <h5><b>github</b><span className="h6 pl-4"> <a href=" https://github.com/minhazu-cmyk/ema-jhon-simple-auth">:  https://github.com/minhazu-cmyk/ema-jhon-simple-auth</a> </span></h5>
  <h5><b>site link</b><span className="h6 pl-4"> <a href="https://ema-jhon-simple-acee0.firebaseapp.com/">: https://ema-jhon-simple-acee0.firebaseapp.com/</a> </span></h5><br/>
   
   <h4><u> Academic Qualification</u></h4>
   <h5> Estonian Entrepreneurship University of Applied Sciences   </h5>
   <h5><b> SUBJECT </b><span className="h6 pl-3">:   Creativity and business innovation </span></h5>
   <h5><b> Location</b><span className="h6 pl-3">: Tallinn Estonia</span></h5><br/>

   <h4><u> Language Competency</u></h4>
   <h5><b> English  </b><span className="h6 pl-3">:   Fluent in English</span></h5>
   <h5><b>Portuguese</b><span className="h6 pl-3">:conversational in Portuguese </span></h5>
   <h5><b> Bengali  </b><span className="h6 pl-3">:   Native in Bengali</span></h5>
   <h5><b>Hindi </b><span className="h6 pl-3">: Fluent in Hindi</span></h5>
  
</section>
</div>
        </div>
    );
};

export default Resumi;

