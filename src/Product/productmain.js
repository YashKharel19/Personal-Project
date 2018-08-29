import React, { Component } from 'react';

import { ProductDataList } from '../Data/Product/Productdatalist';
import ProdCover from './prodCover';
import ProductList from './productlist';

export default class Product extends Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
        <ProdCover />
        <ProductList productlisturl={ProductDataList} />
      </div>
    );
  }
}
