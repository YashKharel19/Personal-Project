import React,{ Component } from 'react';

import { VacancyData } from '../Data/Career/vacancydata';
import { BenefitData } from '../Data/Career/benefitdata';
import CareerCover from './coverpage';
import Vacancy from './vacancy';
import Benefits from './benefit';

export default class Career extends Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
        <CareerCover />
        <Vacancy vacancyurl={VacancyData} />
        <Benefits benefiturl={BenefitData} />
      </div>
    );
  }
}
