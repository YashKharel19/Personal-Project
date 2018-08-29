import React, { Component }  from 'react';
import { Icon }  from 'antd';

import './benefit.css';

export default class Benefits extends Component{
  constructor(props){
    super(props);
    this.state={
      benefits:[]
    }
  }
  componentDidMount(){
    const {benefiturl} = this.props;
      this.setState(
        {
          benefits:benefiturl
        });
  }
  render(){
    const{ benefits } = this.state;
    if(benefits){
      return(
        <div className="career-benefits">
          <h1 className="benefits-head">BENEFITS</h1>
          {benefits.map(benefit =>{
            if((benefit.id)%2 === 1){
              return(
                  <div key={benefit.id} className="white-box">
                    <div className="row">
                      <div className="media-body col-md-6">
                        <h3>{benefit.header}</h3>
                        <Icon type="code-o" />
                        &nbsp;&nbsp;<span>{benefit.body}</span>
                      </div>
                      <div className="media-items col-md-6">
                        <img src={benefit.url1} alt="futsal" />
                        &nbsp;&nbsp;<img src={benefit.url2} alt="futsal" />
                      </div>
                    </div>
                  </div>
              );
            }
            else{
              return(
                <div key={benefit.id} className="white-box">
                  <div className="row">
                    <div className="media-items col-md-6">
                      <img src={benefit.url1} alt="hike" />
                      &nbsp;&nbsp;<img src={benefit.url2} alt="hike" />
                    </div>
                    <div className="media-body col-md-6">
                      <h3>{benefit.header}</h3>
                      <Icon type="camera-o" />
                      &nbsp;&nbsp;<span>{benefit.body}</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          </div>
      );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
