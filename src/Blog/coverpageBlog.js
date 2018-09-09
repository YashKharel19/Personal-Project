import React,{ Component } from 'react';

import './coverpageBlog.css';

export default class BlogCover extends Component{
 handleClick(){
    window.scrollTo(0,650);
 }
 render(){
  return(
    <div className='coverpage-blog'>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
              <h1 className='main-head'> Blog Section</h1>
        </div>
        <div className='about-main-head'>
                <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
        </div>
    </div>
  );
 }
}
