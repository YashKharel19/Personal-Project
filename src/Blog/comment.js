import React,{ Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';

export default class Article extends Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }
  render() {
    return (
      <ReactDisqusComments
        shortname="semantro"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://localhost:3000/detail"
        category_id="123456"
        onNewComment={this.handleNewComment}/>
    );
  }
}
