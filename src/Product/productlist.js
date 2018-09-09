import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import '../mediaqueries.css';
import './productlist.css';


export  default class ProductList extends Component{
  constructor(props){
    super(props);
    this.state={
      productlists:[]
    }
  }
  componentDidMount(){
    const {productlisturl} = this.props;
        this.setState(
        {
          productlists:productlisturl
        });
  }
  render(){
    const{ productlists }=this.state;
      if(productlists.length){
          return(
            <div>
              <h1 className="header-product"> PRODUCTS </h1>
                {productlists.map(productlist =>{
                      if((productlist.id)%2 === 1){
                        return(
                          <div className='product-a' key={productlist.id} >
                              <div className='container'>
                                    <div className='product-row'>
                                        <div className='col-md-4'>
                                            <img src={productlist.url} className="prod-img"  alt={productlist.title} />
                                            <Link to={`/product/${productlist.title}`} key='id'>
                                                <div className='product-button-position center-title'>
                                                    <button className='product-button'>Learn More </button>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-md-8'>
                                          <h1 className='product-header'>{productlist.title}</h1>
                                          <h2 className='product-client'>{productlist.subheader}</h2>
                                          <p className='product-details'>{productlist.descriptionpara1}</p>
                                          <p className='product-details2'>{productlist.descriptionpara2}</p>
                                        </div>
                                    </div>
                              </div>
                          </div>
                        );
                      }
                      else{
                        return(
                            <div className='product-b' key={productlist.id} >
                              <div className='container'>
                                <div className='product-row'>
                                   <div className='col-md-8'>
                                         <h1 className='product-header'>{productlist.title}</h1>
                                         <h2 className='product-client'>{productlist.subheader}</h2>
                                         <p className='product-details'>{productlist.descriptionpara1}</p>
                                         <p className='product-details2'>{productlist.descriptionpara2}</p>
                                   </div>
                                   <div className='col-md-4'>
                                        <img src={productlist.url} className="prod-img"  alt={productlist.title} />
                                        <Link to={`/product/${productlist.title}`} key='id'>
                                            <div className='product-button-position center-title'>
                                                <button className='product-button'>Learn More </button>
                                            </div>
                                        </Link>
                                   </div>
                                </div>
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
