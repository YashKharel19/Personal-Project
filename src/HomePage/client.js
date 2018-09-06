import React,{Component} from 'react';
import { Icon } from 'semantic-ui-react';

import './client.css';
import { Modal } from 'antd';
import '../mediaqueries.css';

export default class Client extends Component{
  constructor(props){
    super(props);
    this.state={
      clients:[],
      visible:false,
      currentClient:{}
    }
  }
  showModal = (client) => {
    this.setState({
      visible: true,
      currentClient:client
    });
  }
  handleCancel = (e) => {
   console.log(e);
   this.setState({
     visible: false,
   });
 }
  componentDidMount(){
    const {clienturl} = this.props;
      this.setState(
        {
          clients:clienturl
        });
  }
  render(){
    const{ clients,currentClient }=this.state;
    if(clients.length){
      return(
          <div>
            <h1 className = 'client-header' > CLIENTS </h1>
            <div className='client-background'>
              <ul id="hexGrid">
                {clients.map(client =>
                  <li className="hex" key={client.id}>
                    <div className="hexIn" onClick={()=> this.showModal(client)}>
                       <div className="hexLink">
                        <img title={client.clientname}  src={client.url} alt={client.url} />
                       </div>
                    </div>
                  </li>
                )}
                {Object.keys(currentClient).length ? <Modal
                  title="Client Details"
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
                      <div className='row'>
                        <div className="col-md-4">
                          <div className='image-center'>
                            <img src={currentClient.url} alt='pravin' width='220px' className='modal-image-client' />
                          </div>
                          <h2 className='client-all-modal-name'>{currentClient.clientname}</h2>
                          <h3 className='client-all-modal-position'>{currentClient.clientdetail}</h3>
                          <div className='vertical-line'></div>
                        </div>
                        <div className="col-sm-6 client-all-modal-detail-all">
                          <h2 className='client-all-modal-details-header1'>Contact Info</h2>
                          <p className='client-all-modal-contact'>{currentClient.clientcontact}</p>
                          <h2 className='client-all-modal-details-header2'>Project Worked Together</h2>
                          <ul>
                            <li className='btn'>SPELL CHECKER</li>
                            <li className='btn'>DOCUMENT MANAGEMENT SYSTEM</li>
                          </ul>
                          <h2 className='client-all-modal-details-header3'>SPELL CHECKER</h2>
                          <p className='person-description'>
                            {currentClient.description}
                          </p>
                          <h2 className='client-all-modal-details-header3'>DOCUMENT MANAGEMENT SYSTEM</h2>
                          <p className='person-description'>
                            {currentClient.description}
                          </p>
                        </div>
                      </div>
                </Modal>: null}
              </ul>
            </div>
          </div>
    );
  }
  else{
      return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
  }
  }
}
