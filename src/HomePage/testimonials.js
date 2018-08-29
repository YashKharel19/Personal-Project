import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Carousel } from 'react-bootstrap';

import './testimonial.css';

export default class Testimonials extends Component{
  constructor(props){
    super(props);
    this.state={
      testimonials:[]
    }
  }
  componentDidMount(){
    const {testimonialurl} = this.props;
      this.setState(
        {
          isLoaded:true,
          testimonials:testimonialurl
        });
  }
  render(){
    const{ testimonials }=this.state;
    if(testimonials.length){
        return(
          <div>
          <h1 className='header-testimonials'> TESTIMONIALS </h1>
          <div className='testimonials-background  carosuel-height-testimonials'>
            <Carousel>
              {testimonials.map(testimonial =>
                  <Carousel.Item key={testimonial.id}>
                     <div className='row carousel-row'>
                        <div className='col-md-4'>
                            <img className='testimonials-img' src={testimonial.url} alt='yash' />
                        </div>
                        <div className='col-md-8'>
                          <div className='text-testimonials'>
                            <blockquote>
                                {testimonial.description}
                            </blockquote>
                          </div>
                          <cite className='carousel-cite'>&#8212; {testimonial.name}</cite>
                        </div>
                     </div>
                  </Carousel.Item>
              )}
            </Carousel>
          </div>
        </div>
      );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
