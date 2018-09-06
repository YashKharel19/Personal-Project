import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';

import './featureproduct.css';
import '../mediaqueries.css'
export default class FeatureProduct extends Component{
  constructor(props){
    super(props);
    this.state={
      features:[]
    }
  }
  componentDidMount(){
    const {featureurl} = this.props;
      this.setState(
        {
          features:featureurl
        });
  }
  render(){
    const{ features }=this.state;
      if(features.length){
            return(
              <div className="features-main">
              <div className='container'>
              <h2 className="features-head">FEATURED PRODUCT</h2>
              {features.map(feature =>{
                    return(
                          <div key={feature.id} className="row">
                              <div className="col-sm-6">
                                <ScrollAnimation
                                animateIn='zoomIn'
                                animateOnce={true}>
                                  <div className="features-description">
                                    <h3 className="features-h">{feature.title}</h3>
                                    <p className="features-p">{feature.description}</p>
                                  </div>
                                </ScrollAnimation>
                              </div>
                              <div className="col-md-6">
                                      <div className="laptop-wrapper">
                                            <iframe width="560" height="315" title='sahek' src="https://www.youtube.com/embed/WEy_deihDfo?rel=0&autoplay=1&loop=1&playlist=WEy_deihDfo”" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                      </div>
                              </div>
                          </div>
                      );
              })}

              </div>
              </div>
            );
      }
      else{
          return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
      }
  }
}
