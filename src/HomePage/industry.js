import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card } from 'antd';
import { Icon } from 'semantic-ui-react';

import '../mediaqueries.css';
import './industry.css';
import { IndustryData } from '../Data/Homepage/Industry/industrydata.js';

export default class Industry extends Component{
  constructor(props){
    super(props);
    this.state={
      industries:[]
    };
  }
  navChange(){
    window.location.reload();
  }
  componentDidMount(){
    const industryvalue = IndustryData;
      this.setState(
        {
          industries:industryvalue
        });
  }
  render(){
    const{ industries } = this.state;
    if(industries.length){return(
      <div className='industry-back'>
          <div className='container'>
              <h1 className='industry-mainheader'>  INDUSTRY DOMAIN OF INTEREST</h1>
              <p className='industry-content'>Integrated ICT is an innovative company that is applying the latest developments in Artificial Intelligence (AI) to develop novel solutions to challenging problems.</p>
              <ScrollAnimation
              animateIn='zoomIn'
              animateOnce={true}>
                <div className='industry-div'>
                    {industries.map(industry =>{
                      return(
                        <div key={industry.id} className="col-md-4">
                            <Card fluid={true} className='industry-ui-card'>
                                  <div className='industry-image'>
                                    <img src={industry.url} alt={industry.title} width='100px' />
                                  </div>
                                  <h3 className = 'center-title industry-h3'>{industry.title}</h3>
                                  <p className='industry-p'>{industry.description}</p>
                            </Card>
                        </div>
                      );
                    }
                    )}
                    <a href='#/aboutus' onClick={this.navChange} exact="true" key='id'>
                      <div className ='center-title'>
                            <button className='industry-button'>Learn More</button>
                      </div>
                    </a>
                </div>
              </ScrollAnimation>
          </div>
      </div>
     );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
