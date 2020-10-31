import React from 'react';
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
import animation from '../../images/animation.gif'

import Project from '../Home/Project/Project';
const AllProject = () => {
    return (
      <div style={{ marginTop: "60px",backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
      <HeaderNavbar></HeaderNavbar>

         <Project></Project>
         </div>
    );
};

export default AllProject;