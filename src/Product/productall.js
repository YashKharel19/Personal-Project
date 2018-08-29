import React,{ Component } from 'react';

import { Icon } from 'semantic-ui-react';

import './productall.css';


export default class ProductAll extends Component{
  constructor(props){
    super(props);
    this.state={
      productsall:[],
      productdetailall:[]
    }
  }
  componentDidMount(){
    const {productallurl} = this.props;
      const {title} = this.props;
    this.setState(
      {
        productsall:productallurl,
        productdetailall:title
      });

  }
  render(){
    const{ productsall, productdetailall } = this.state;
    if(productsall){
      return(
        <div className='product-about-main'>
          {productsall.map(productall =>{
            if(productdetailall ===productall.title){
              return(
                <div className='row'>
                  <div className="col-md-4">
                    <div className='product-image-center'>
                      <img src={productall.imageurl} alt={productall.title} width='300px' className='modal-image-product' />
                    </div>
                    <div className='vlall'></div>
                  </div>
                  <div className="col-sm-6 productall-detail-all">
                    <h2 className='productall-details-header1'>{productall.title}</h2>
                    <h2 className='productall-details-header2'>USED BY</h2>
                    {productall.used.map(list=>{
                      return(
                        <ul>
                          <li className='btn'>{list.client}</li>
                        </ul>
                      );
                    })}
                    <h2 className='productall-details-header3'>Description</h2>
                    <p className='productall-description'>{productall.description1}</p>
                    <p className='productall-description'>{productall.description2}</p>
                    <h2 className='productall-details-header3'>What are our client say about the product</h2>
                    <p className='productall-description'>{productall.testimonial}</p>
                  </div>
                </div>
              );
          }
         }
         )}
        </div>
      );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
