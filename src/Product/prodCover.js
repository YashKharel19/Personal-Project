import React, { Component } from 'react';

import './prodcover.css';
import '../mediaqueries.css';

export default class ProdCover extends Component{
  handleClick(){
    window.scrollTo(0,650);
  }
  render(){
    return(
      <div className='coverpage-product'>
          <div className='col-md-6'></div>
          <div className='col-md-6'>
                <h1 className='main-head'> Blog Section</h1>
          </div>
          <div className='product-main-head'>
                  <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
          </div>
      </div>
    );
  }
}
