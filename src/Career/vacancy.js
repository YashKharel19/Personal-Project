import React, { Component } from 'react';
import { Modal, Icon, Button } from 'antd';

import { Card } from 'semantic-ui-react';

import ApplyNow from '../Form/applynow';
import Hiring from '../assets/hiring.png';

import './position.css';
import './vacancy.css';
import '../animate.css';


export default class Vacancy extends Component{
  constructor(props){
    super(props);
    this.state={
      vacancies:[],
      visible: false,
      formVisible:false,
      currentPosition:{}
    }
  }
  showModal = (vacancy) => {
    this.setState({
      visible: true,
      currentPosition:vacancy
    });
  }
  showForm = (apply) => {
    this.setState({
      formVisible: true,
    });
  }
  handleCancel = (e) => {
   console.log(e);
   this.setState({
     visible: false,
   });
  }
  handleFormCancel = (f) => {
   console.log(f);
   this.setState({
     formVisible: false,
   });
  }
  componentDidMount(){
    const {vacancyurl} = this.props;
      this.setState(
        {
          vacancies:vacancyurl
        });
  }
  render(){
    const{ vacancies, currentPosition } = this.state;
    if(vacancies.length){
      return(
          <div className="job-description">
            <h1>VACANCY</h1>
            <div className="row career-dev">
              {vacancies.map(vacancy =>{
                return(
                       <div  key={vacancy.id} className="col-sm-6 col-md-4 career-job">
                          <Card className="career-job-card" onClick={()=> this.showModal(vacancy)}fluid>
                            <img src={vacancy.url} alt={vacancy.name} width='100%' height='100%' />
                            <div className="hidden-content">
                              <Icon type="check-circle-o" className='hire-icon' />
                              <h3 className="hire-head">{vacancy.name}</h3>
                              <p className="hire-text">Click to apply</p>
                            </div>
                          </Card>
                       </div>
                );
              })}
              {Object.keys(currentPosition).length ? <Modal
                title="JOIN OUR AMAZING TEAM"
                width='100%'
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}
                closable={true}
                keyboard={true}
                okButtonProps={{ disabled: true }}
                cancelButtonProps={{ dispaly:"none" }}
                okText="Close"
              >
                  <div>
                      <div className='image-position'>
                        <img src= {Hiring} alt='hire' width='230px' />
                      </div>
                      <div className='apply-description'>
                          <h1>POSITION :</h1><h3>{currentPosition.position}</h3><br />
                          <h2>QUALIFICATION</h2><br />
                          <p>{currentPosition.qualification}<br /></p>
                          {currentPosition.skills.map(skill =>{
                            return(
                              <ul key={skill.id}>
                                  <li>&#8212;{skill.list}</li>
                              </ul>
                            );
                          })}
                          <h2>SALARY</h2><br />
                          <p>{currentPosition.salary}</p>
                          <h2>NOTE :</h2><br />
                          <p>{currentPosition.note}</p>
                          <Button type="primary" id="registrationButton" onClick={(apply)=>{this.showForm(apply)}}>Apply Now</Button>
                      </div>
                  </div>
              </Modal> : null}
            </div>
            <Modal
              title="JOIN OUR AMAZING TEAM"
              width='100%'
              visible={this.state.formVisible}
              footer={null}
              onCancel={this.handleFormCancel}
              closable={true}
              keyboard={true}
              okButtonProps={{ disabled: true }}
              cancelButtonProps={{ dispaly:"none" }}
              okText="Close"
            >
              <ApplyNow />
            </Modal>
          </div>
      );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
