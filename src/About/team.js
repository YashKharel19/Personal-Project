import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import { Modal } from 'antd';
import User from '../assets/user.png'
import './team.css';

export default class Team extends Component {
  constructor(props){
    super(props);
    this.state={
      persons:[],
      visible: false,
      currentPerson:{}
    }
  }
  showModal = (person) => {
    this.setState({
      visible: true,
      currentPerson:person
    });
  }
  handleCancel = (e) => {
   console.log(e);
   this.setState({
     visible: false,
   });
 }
  componentDidMount(){
    const {teamurl} = this.props;
    this.setState(
        {
          persons:teamurl
        });
  }
  render(){
    const{ persons,currentPerson }=this.state;
     if(persons.length){
        return(
              <div className="team-main">
                <h1 className="team-head">THE ROOTS</h1>
                <p className='about-team'>
                    The Integrated ICT is amazing. Team includes the person with profound research backgound to the people having sound knowledge of users actual usage environment. This makes great combination to solve the challenging problems and provide the customized solutions to the users where user can have best experience to use the software system.
                </p>
                <span className='title-line'></span>
                <div className="row team-row">
                {persons.map(person =>
                  <div key={person.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="team-card" onClick={()=> this.showModal(person)}>
                        <img src={person.url} alt={person.name} />
                        <div className="team-info">
                          <h3>{person.name}</h3>
                          <p>{person.position}</p>
                        </div>
                      </div>
                  </div>
                  )}
                  {Object.keys(currentPerson).length ? <Modal
                    title="Person Details"
                    width='100%'
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                    closable={true}
                    keyboard={true}
                    okButtonProps={{ disabled: true }}
                    cancelButtonProps={{ dispaly:"none" }}
                    okText="Close"
                  >
                      <div  className='row'>
                        <div className="col-md-4">
                          <div className='image-center'>
                            <img src={currentPerson.url} alt={currentPerson.name} width='200px' className='modal-image' />
                          </div>
                          <h2 className='team-name'>{currentPerson.name}</h2>
                          <h3 className='team-position'>{currentPerson.position}</h3>
                          <div className='vl'></div>
                         </div>
                        <div className="col-sm-6 team-detail-all">
                          <h2 className='team-details-header1'>Contact Info</h2>
                          <p className='team-contact'>{currentPerson.link}</p>
                          <h2 className='team-details-header2'>Expertise</h2>
                          {currentPerson.tags.map(expertise=>{
                            return(
                                <div key={expertise.id} className = 'list-expertise'>
                                  <ul>
                                    <li className='btn'>{expertise.interest}</li>
                                  </ul>
                                </div>
                            );
                          })}
                          <h2 className='team-details-header3'>A little description about {currentPerson.name}</h2>
                          <p className='person-description'>{currentPerson.description}</p>
                        </div>
                      </div>
                  </Modal> : null}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <a href='/career' key='id'>
                        <div className="join-image">
                          <img src={User} alt='user' height="100%" />
                          <div className='join-team'>
                            <h3>Join Our Team</h3>
                          </div>
                        </div>
                    </a>
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
