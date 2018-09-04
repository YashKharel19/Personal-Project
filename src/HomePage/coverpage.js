import React, { Component } from 'react';

import './coverpage.css';

export default class LandingTheme extends Component{
  render(){
    return(
      <div className='coverpage'>
            <div className='main-padding'>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <div className="laptop-wrapper">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/WEy_deihDfo?rel=0&autoplay=1&loop=1&playlist=WEy_deihDfo”" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
              </div>
            </div>
            </div>
      </div>
    );
  }
}
