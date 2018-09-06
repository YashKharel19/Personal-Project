import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';

import { Carousel } from 'react-bootstrap';
import './ourwork.css';
import '../mediaqueries.css';

export default class OurWork extends Component {
  constructor(props){
    super(props);
    this.state={
      ourworks:[]
    }
  }
  componentDidMount(){
    const {ourworkurl} = this.props;
      this.setState(
        {
          ourworks:ourworkurl
        });
  }
  render(){
    const{ ourworks }=this.state;
      if(ourworks.length){return(
          <div>
            <h1 className='header-ourwork'> OUR WORK </h1>

              <Carousel>
              {ourworks.map(ourwork =>
                <Carousel.Item key={ourwork.id}>
                  <img className='works-inside' src={ourwork.url} alt={ourwork.title} />
                    <div className='work-a'>
                         <div className='work-row'>
                            <div className='col-md-4'>
                                <img src={ourwork.url} className="carousel-img"  alt={ourwork.title} />
                            </div>
                            <div className='col-md-8'>
                              <h1 className='work-header'>{ourwork.title}</h1>
                              <h2 className='work-client'>{ourwork.subheader}</h2>
                              <p className='work-details'>
                              {ourwork.description}
                              </p>
                            </div>
                        </div>
                  </div>
                </Carousel.Item>)}
              </Carousel>
              <a href='/product' key='id'>
                <div className='work-button-position center-title'>
                    <button className='work-button'>SEE ALL</button>
                </div>
              </a>
        </div>
        );
      }
      else{
          return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
      }
  }
}
