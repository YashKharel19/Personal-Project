import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import { Modal, Button } from 'antd';

import FormAll from '../Form/form';
import './footer.css';

export default class Footer extends Component {
   constructor(props){
      super(props);
      this.state = { visible: false }
   }
   showModal = () => {
     this.setState({
       visible: true,
     });
   }
   handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(){
    return(
      <div className="footer-main">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <h2 className="footer-head-1">GET IN TOUCH</h2>
            <a className="footer-icon" id="footer-twitter" href="https://twitter.com/i2ctnepal" target="_blank" rel="noopener noreferrer" title="Twitter"><Icon name="twitter" size='large'></Icon></a>
            <a className="footer-icon" id="footer-fb" href="https://www.facebook.com/integratedictnepal/" target="_blank" rel="noopener noreferrer" title="Facebook"><Icon name="facebook f" size='large'></Icon></a>
            <a className="footer-icon" id="footer-googlep" href="https://plus.google.com/u/0/116038666881959794070" target="_blank" rel="noopener noreferrer" title="Google Plus"><Icon name="google plus" size='large'></Icon></a>
            <a className="footer-icon" id="footer-youtube" href="https://www.youtube.com/channel/UCZzGXLLjAA8KlmWKJiUElew/videos" target="_blank" rel="noopener noreferrer" title="Youtube"><Icon name="youtube play" size='large'></Icon></a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <Button type="primary" className="footer-head-3" onClick={this.showModal}>CONTACT US</Button>
          <Modal
            title="Contact Us"
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
              <FormAll />
          </Modal>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <h2 className="footer-head-2">Semantro</h2>
            <p className="footer-des">© Copyright 2018. All rights reserved unless stated. Designed & built with <span className="footer-love">♥</span> in Nepal</p>
          </div>
        </div>
      </div>
    )
  }
}
