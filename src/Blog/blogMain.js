import React,{ Component } from 'react';

import BlogCover from './coverpageBlog';
import BlogContent from './blogContent';
import { BlogList } from '../Data/Blog/bloglistdata';
import './blogMain.css';

export default class Blog extends Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
        <BlogCover />
        <BlogContent blogurl={ BlogList } />
      </div>
    );
  }
}
