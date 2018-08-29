import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';

import { ProductDetails } from '../Data/Product/Productdetailsdata';
import { ProductAllData } from '../Data/Product/Productalldata';
import FormAll from '../Form/form';
import './productDetail.css';
import ProdFeature from './productFeature';
import ProductAll from './productall';

export default class ProdDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      productdetails:[],
      titleclick:""
    }
  }
  changeNav(event, productTab) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(productTab).style.display = "block";
      event.currentTarget.className += " active";
  }
  componentDidMount(){
    document.getElementById("defaultOpen").click();
    window.scrollTo(0,0);
  }
  componentWillMount(){
    const {title} = this.props;
    const productlisturl = ProductDetails;
    this.setState(
      {
        productdetails:productlisturl,
        titleclick:title
      });
  }
  render(){
    const{ productdetails, titleclick } = this.state;
    if(productdetails){
        return(
          <div className='product-detail-main'>
            {productdetails.map(productdetail =>{
              if(titleclick===productdetail.title){
                  return(
                    <div className="product-detail-bg" style={{ backgroundImage: `url(${productdetail.url})`}} key={'details.id'}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <h1 className ='product-header-detail'>{productdetail.title}</h1>
                          <h3 className ='product-detail-description'>{productdetail.tagline}</h3>
                        </div>
                        <div className='col-md-6'>
                          <img src={productdetail.imageurl} alt={productdetail.title} width='500px' className='image-product' />
                        </div>
                      </div>
                    </div>
                  );
                }
            })}
            <div className="tab">
              <button className="tablinks" onClick={(event)=>{this.changeNav(event, 'Features')}} id='defaultOpen' >FEATURES</button>
              <button className="tablinks" onClick={(event)=>{this.changeNav(event, 'Demo')}}>ABOUT PRODUCTS</button>
              <button className="tablinks" onClick={(event)=>{this.changeNav(event, 'Request')}}>REQUEST A QUOTE</button>
            </div>
            <div id="Features" className="tabcontent">
                <ProdFeature productdetailurl={ProductDetails} title={titleclick} />
            </div>
            <div id="Demo" className="tabcontent">
                  <ProductAll productallurl={ProductAllData} title={titleclick} />
            </div>
            <div id="Request" className="tabcontent">
              <FormAll />
            </div>
          </div>
        );
    }
    else{
         return <div className='loading-icon'><Icon name='spinner' loading size='huge' /></div>
    }
  }
}
