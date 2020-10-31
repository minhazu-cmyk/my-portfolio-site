import React from 'react';
import './Contack.css'
const Contack = () => {
    return (
        <div>
             <h2 style={{color:'rgb(81, 233, 157)',marginTop:'60px',marginBottom:'60PX',textAlign:'center'}}>Contact Us</h2>
              <section className='d-flex justify-content-center'>
              <section className='col-12 col-sm-6 col-md-7 mb-5'> 
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
                    <h5 className="text-center text-white pb-3">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>minhazul abedin</span></h5>
        </div>
    );
};

export default Contack;