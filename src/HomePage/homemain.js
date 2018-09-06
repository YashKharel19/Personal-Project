import React, {Component} from 'react';

import { OurWorkData } from '../Data/Homepage/OurWork/ourworkdata.js'
import { TestimonialsData } from '../Data/Homepage/Testimonial/testimonialdata.js';
import { ClientData } from '../Data/Homepage/Client/clientdata.js';
import { FeatureData } from '../Data/Homepage/Feature/feature.js';
import  LandingTheme from './coverpage';
import  FeatureProduct from './FeatureProduct';
import  Industry from './industry';
import  OurWork from './ourwork';
import  Client from './client';
import  Testimonials from './testimonials';

export default class Home extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
            <LandingTheme />
            <FeatureProduct featureurl={FeatureData} />
            <Industry />
            <OurWork ourworkurl={OurWorkData} />
            <Client clienturl={ClientData} />
            <Testimonials testimonialurl={TestimonialsData} />
      </div>

    );
  }
}
