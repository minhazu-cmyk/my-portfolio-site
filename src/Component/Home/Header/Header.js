import React from 'react';
import minhaj from '../Resumi/amrpic.jpg';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical'
import { FaFacebookSquare, FaGithub,FaLinkedin } from "react-icons/fa";
import resume from './Resume (3).pdf'
import { Link } from 'react-router-dom';
const Header = () => {
    const expertise=["I am ",2000, " MERN-Stack Developer",5000, "React Front-end  developer",5000]
    return (
        <div className='container'>
        <div className="row">
            <div className="col-md-7" style={{marginTop:'170px'}}>
              <h5 style={{color:'rgb(81, 233, 157)'}}>Hello, I am</h5>  
                 <Fade left>
                   <h1 className='text-white'>MINHAZUL ABEDIN  </h1> 
                 </Fade>
                 <Typical className="text-danger mb-3 h3"
                        steps={expertise}
                        loop={Infinity}
                        wrapper="p"
                    />
             <h6 className='text-white mb-3'>I am a self taught frontend-developer, i can balance between functional and aesthetic design. i am having expertise in modern front-end technologies and a deep interest in javascript. i desire to work in the software industry with a good learning environment to grow my skills to the next level </h6>
                 <a style={{fontSize:'30px',color:'white',paddingRight:'30px'}}  href="https://github.com/minhazu-cmyk"><FaGithub></FaGithub></a>
                 <a style={{fontSize:'30px',color:'white',paddingRight:'30px'}}  href="https://www.linkedin.com/in/minhazul-abedin-924260143/"><FaLinkedin></FaLinkedin></a>
                 <a style={{fontSize:'30px',color:'white'}}  href="https://www.facebook.com/minhajul.abedin.963434"><FaFacebookSquare></FaFacebookSquare>  </a><br/><br/>
                  
                 <Link to='/about-me'>
                     <button class="btn btn-success my-2 my-sm-0 text-white mr-4" type="submit">About Me</button>
                 </Link>
             <a href={resume} download='resume' ><button className='btn btn-danger text-white pd-4' >Download CV</button></a>
            </div>
             <div className="col-md-5">
                <img style={{width:'100%',marginTop:'120px', borderRadius:'50%'}} src={minhaj} alt=""/>
             </div>
        </div>
        </div>
    );
};

export default Header;