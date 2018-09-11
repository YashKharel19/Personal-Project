import React,{ Component } from 'react';

import './coverpageBlog.css';

export default class BlogCover extends Component{
 handleClick(){
    window.scrollTo(0,650);
 }
 render(){
  return(
    <div className='coverpage-blog'>
        <div className='about-main-head'>
          <h1 className='main-head'> BLOG SECTION</h1>
            <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
        </div>
    </div>
  );
 }
}
