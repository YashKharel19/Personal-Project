import React ,{ Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { Icon } from 'semantic-ui-react';
import { ShortDescription } from '../Data/About/integratedshort';
import { WorkingAreas } from '../Data/About/workingareasall';
import './aboutdetail.css';


export default class AboutDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      aboutict:[],
      workingareas:[],
    }
  }
  componentDidMount(){
    const ict = ShortDescription;
    const workingarealist = WorkingAreas;
    this.setState({
      aboutict:ict,
      workingareas:workingarealist
    });
  }
  render(){
    const { aboutict, workingareas }=this.state;
    if(aboutict.length){
      return(
        <div className='about-back'>
            <div className='container'>
              {aboutict.map(shortdesc =>{
                  return(
                    <div key={shortdesc.id}>
                          <h1 className='about-mainheader'>About Integrated ICT</h1>
                          <p className='about-content-fintech'>{shortdesc.aboutIct}</p>
                    </div>
                  );
               })}
                   <div>
                        <span className='title-line'></span>
                          <div className="row row-about">
                            {workingareas.map(arealist =>{
                              if((arealist.id%2) === 1){
                               return(
                                     <div key={arealist.id} className="col-md-6">
                                        <ScrollAnimation
                                        animateIn='zoomIn'
                                        animateOnce={true}>
                                         <div className="workingareas-height">
                                           <h2 className='about-workingareas'>
                                               <img src={arealist.url} width='65px' alt='description' />
                                               &nbsp;&nbsp;{arealist.title}
                                           </h2>
                                           <p className='about-content-workingareas'>{arealist.description}</p>
                                         </div>
                                        </ScrollAnimation>
                                     </div>
                               );
                             }
                             else{
                               return(
                                    <div key={arealist.id} className="col-md-6">
                                        <ScrollAnimation
                                        animateIn='zoomIn'
                                        animateOnce={true}>
                                           <div className="workingareas-height">
                                             <h2 className='about-workingareas'>
                                                 <img src={arealist.url} width='65px' alt='description' />
                                                 &nbsp;&nbsp;{arealist.title}
                                             </h2>
                                             <p className='about-content-workingareas'>{arealist.description}</p>
                                           </div>
                                        </ScrollAnimation>
                                    </div>
                                );
                             }
                            }
                          )}
                          </div>
                    </div>
              </div>      
        </div>
      );
    }
    else{
      return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
