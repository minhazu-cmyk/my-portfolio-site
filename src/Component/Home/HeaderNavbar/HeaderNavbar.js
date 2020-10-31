import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNavbar.css'
const HeaderNavbar = () => {  

    return ( 
        <div>
            <Navbar fixed="top" b expand="lg" style={{background:"#2d313b"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'  />
                <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav className="ml-auto">
                    <Nav.Link  className="my-nav-link home-link" style={{color:"white"}} href="">
                    <Link  to='/home'>
                           <h5  style={{textDecoration:'none',color:'white'}}> Home</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"white"}} href="">
                    <Link  to='/about-me'>
                           <h5  style={{textDecoration:'none',color:'white'}}>About Me</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link " style={{color:"white",textDecoration:'none'}} href="">
                    <Link  to='/all-project'>
                           <h5  style={{textDecoration:'none',color:'white'}}> Projects</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"white"}} href="">
                    <Link  to='/blog'>
                           <h5  style={{textDecoration:'none',color:'white'}}> Blog</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"#c2c1c1e7"}} href="">
                       <Link  to='/resumi'>
                           <h5  style={{textDecoration:'none',color:'white'}}> resume</h5>
                       </Link>
        
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link" style={{color:"white"}} href="#contact">
                    <Link  to='/contack-us'>
                           <h5  style={{textDecoration:'none',color:'white'}}> Contact</h5>
                       </Link>
                    </Nav.Link>
                          <a href="https://drive.google.com/file/d/14pRlRMjKoZTgKXH6CcXGeJas_tOBo6Di/view?usp=sharing"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Resume.pdf</button> </a>
    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;