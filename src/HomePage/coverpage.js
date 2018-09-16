import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './coverpage.css';
import '../mediaqueries.css';
import ThemeA from '../assets/theme.svg';
import ThemeB from '../assets/theme2.svg';
import ThemeC from '../assets/theme3.svg';
import ThemeD from '../assets/theme4.svg';
import '../animate.css';

export default class LandingTheme extends Component{
  handleClick(){
    window.scrollTo(0,650);
  }
  navChange(){
    window.location.reload();
  }
  render(){
    return(
      <div className='main-padding'>
        <Carousel pauseOnHover={false} >
          <Carousel.Item animateIn={true}>
             <div className='coverpage' style={{backgroundImage:`url(${ThemeA})`}}>
                <div className='col-md-6'>
                    <h1 className='main-head animated zoomIn'>ARTIFICIAL INTELLIGENCE</h1>
                    <p className='cover-description animated  bounceInUp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#/aboutus" onClick={this.navChange} key='id'>
                      <div className='main-button-position center-title'>
                          <button className='main-button animated fadeInLeft'>KNOW MORE</button>
                      </div>
                    </a>
                </div>
                <div className='col-md-6'>
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item animateIn={true}>
               <div className='coverpage' style={{backgroundImage:`url(${ThemeB})`}}>
                  <div className='col-md-6'>
                      <h1 className='main-head animated fadeInDown'>DIGITAL TRANSFORMATION NOW AND BEYOND</h1>
                      <p className='cover-description animated fadeInRight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <a href="#/aboutus" onClick={this.navChange} key='id'>
                        <div className='main-button-position center-title'>
                            <button className='main-button animated fadeInLeft'>KNOW MORE</button>
                        </div>
                      </a>
                  </div>
                  <div className='col-md-6'>
                  </div>
              </div>
          </Carousel.Item>
          <Carousel.Item  animateIn={true} className='animated-mainpage flipInX'>
                 <div className='coverpage' style={{backgroundImage:`url(${ThemeC})`}}>
                    <div className='col-md-6'>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='main-head animated fadeInDown'>HIGHLY SCALABLE TECHNOLOGIES</h1>
                        <p className='cover-description animated fadeInUp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#/aboutus" onClick={this.navChange} key='id'>
                          <div className='main-button-position center-title'>
                              <button className='main-button animated fadeInRight'>KNOW MORE</button>
                          </div>
                        </a>
                    </div>
                </div>
          </Carousel.Item>
          <Carousel.Item animateIn={true}>
                 <div className='coverpage' style={{backgroundImage:`url(${ThemeD})`}}>
                    <div className='col-md-6'>
                    </div>
                    <div className='col-md-6'>
                          <h1 className='main-head animated fadeInLeft'> NATURAL LANGUAGE PROCESSING</h1>
                          <p className='cover-description animated fadeInUp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <a href="#/aboutus" onClick={this.navChange} key='id'>
                            <div className='main-button-position center-title'>
                                <button className='main-button animated fadeInRight'>KNOW MORE</button>
                            </div>
                          </a>
                    </div>
                </div>
          </Carousel.Item>
        </Carousel>
        <div className='main-padding'>
                <div className='scroll' id='section07' onClick={this.handleClick}><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  }
}
