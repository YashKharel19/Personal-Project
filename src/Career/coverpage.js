import React, { Component } from 'react';

import './coverpage.css';
import '../mediaqueries.css';

export default class CareerCover extends Component{
  handleClick(){
    window.scrollTo(0,650);
  }
 render(){
  return(
    <div className='coverpage-career'>
    <div className='col-md-6'></div>
    <div className='col-md-6'>
          <h1 className='main-head'> Blog Section</h1>
    </div>
      <div className='career-main-head'>
              <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
      </div>
    </div>
  );
 }
}
