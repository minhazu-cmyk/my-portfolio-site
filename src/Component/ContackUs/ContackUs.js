import React from 'react';
import animation from "../../images/animation.gif"
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
const ContackUs = () => {
    return (
       <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
           <HeaderNavbar></HeaderNavbar>
          <div className="container">
          <div>
             <h2 style={{color:'rgb(81, 233, 157)',paddingTop:'80px',marginBottom:'30PX',textAlign:'center'}}>Countack Us</h2>
              <section className='d-flex justify-content-center'>
              <section className='col-12 col-sm-6 col-md-7 mb-3'> 
              <form>
                       <h2 className='text-center text-white pb-3'>Get To Touch</h2>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="your name *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="your email address"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="20" rows="5" placeholder="your Message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="send-btn"> Send </button>
                     </div>
                   </form>
              </section>
              </section>
                    <h5 className="text-center text-white pb-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>MINHAZUL ABEDIN</span></h5>
        </div>
          </div>
       </div>
    );
};

export default ContackUs;