import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import  NavBar from './HomePage/navbar';
import  Home from './HomePage/homemain';
import  Product from './Product/productmain';
import  ProdDetail from './Product/productDetail';
import  About from './About/aboutMain';
import  Career from './Career/careerMain';
import  Blog from './Blog/blogMain';
import  Footer from './HomePage/footer';
import './App.css';

export default class App extends Component {
    render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/product/:title'
                  render={({match}) => {
                      return <ProdDetail title={match.params.title}/>
                  }
          } />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/aboutus' component={About} />
          <Route exact path='/career' component={Career} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
