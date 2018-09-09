import React , { Component } from 'react';

import './coverabout.css';

export default class AboutCover extends Component{
  handleClick(){
    window.scrollTo(0,650);
  }

  render(){
    return(
      <div className='coverpage-about'>
          <div className='about-main-head'>
                  <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
          </div>
      </div>
    );
  }
}
