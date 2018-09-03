import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './blogContent.css';

export default class BlogContent extends Component{
  constructor(props){
    super(props);
    this.state={
      blogs:[]
    }
  }
  componentDidMount(){
    const {blogurl} = this.props;
      this.setState(
        {
          blogs:blogurl
        });
  }
  render(){
    const{ blogs }=this.state;
      if(blogs.length){
          return(
            <div className='blog-content-main'>
              <ul className="blog-nav">
                <li><a>ALL</a></li>
                <li><a>DEVELOPMENT</a></li>
                <li><a>UI/UX DESIGN</a></li>
                <li><a>BIG DATA</a></li>
                <li><a>MACHINE LEARNING</a></li>
                <li><a>OCR</a></li>
                <li><a>NATURAL LANGUAGE PROCESSING</a></li>
                <li><a>DOCUMENT MANAGEMENT SYSTEM</a></li>
              </ul>
              <div className="row blog-card">
                {blogs.map(blog =>
                    <div className='blog-content col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                      <Link to={`/blog/details/${blog.title}`} key='id'>
                        <Card fluid className="blog-ui-card">
                          <div className="blog-pos-fixed">
                            <img src={blog.url} alt='Devops' width="100%" height="70%" />
                            <h3>{blog.title}</h3>
                            <p>{blog.shortdescription}</p>
                            <div className="blog-tag-div">
                                <a className="blog-tag" href="/blog"><span>tag</span></a>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </div>
                )}
              </div>
            </div>
          );
    }
    else{
        return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }

}
