import React,{ Component } from 'react';

import { TeamData } from '../Data/About/teamdata'
import AboutCover from './coverAbout';
import AboutDetail from './aboutDetail';
import Team from './team';

export default class About extends Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
          <AboutCover />
          <AboutDetail />
          <Team teamurl={TeamData} />
      </div>
    );
  }
}
