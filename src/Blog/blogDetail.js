import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ReactDisqusThread from 'react-disqus-comments';



import './blogDetail.css';
import { BlogDetailData } from '../Data/Blog/blogdetaildata';

export default class BlogDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      blogdetails:[],
      blogtitle:""
    }
  }
  componentDidMount(){
    const {title} = this.props;
    const details = BlogDetailData;
      this.setState({
          blogdetails:details,
          blogtitle:title,
        });
  }
  render(){
    const{ blogdetails , blogtitle }=this.state;
      if(blogdetails){
      return(
        <div className='blog-detail-main'>
          {blogdetails.map(blog =>{
            if(blogtitle===blog.title){
                  return(
                      <div key={blog.id}>
                        <div className="blog-detail-bg" style={{ backgroundImage: `url(${blog.url})`}} key={blog.id}>
                          <p className="blog-detail-text"><span className='blog-views'>Total Views: 10</span></p>
                        </div>
                        <div className='blog-detail-tags'>
                            <Link to={`/blog/:${blog.title}`}><span>BIG Data Similar Tags</span></Link>
                        </div>
                        <div className='blog-detail-body'>
                          <h1 className="blog-detail-header">{blog.title}</h1>
                          <p className = "blog-detail-date border-line">{blog.time}</p>
                          <p className = "blog-detail-author">{blog.author}</p>
                          <section className='blog-detail-section'>
                            {blog.para1}<br />
                            {blog.para2}<br />
                            {blog.para3}
                          </section>
                        </div>
                      </div>
                  );
            }
          })}
            <div className='disqus-position'>
                <ReactDisqusThread
            				shortname="semantro"
            				identifier="test123"
            				title="blog"
            				url="https://www.semantro.com/blog"
            				category_id="123456"
            		 />
            </div>
          <div className='similar-post'>
            <h2>Similar Posts</h2>
            <p>There are no simlar posts yet</p>
          </div>
        </div>
      )
    }
    else{
      return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
    }
  }
}
