import React, { Component } from 'react';

import Career from '../assets/devops.png';
import './blogDetail.css';
import ReactDisqusThread from 'react-disqus-comments';

export default class BlogDetail extends Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
      return(
        <div className='blog-detail-main'>
          <div className="blog-detail-bg" style={{ backgroundImage: `url(${Career})`}} key={'details.id'}>
            <p className="blog-detail-text"><span className='blog-views'>Total Views: 10</span></p>
          </div>

          <div className='blog-detail-tags'>
              <a href='/blog/details/:title'><span>BIG Data Similar Tags</span></a>
          </div>
          <div className='blog-detail-body'>
            <h1 className="blog-detail-header">Blog Detail Title</h1>
            <p className = "blog-detail-date border-line">Last modified: 2018-8-16</p>
            <p className = "blog-detail-author">Created by Author Name</p>
            <section className='blog-detail-section'>
            NLP practitioner certification Training is a five day high quality learning training under the observation of highly experienced trainers accredited by the ANLP (Association for Neuro Linguistic Programming) India. The program is about stress management, increasing the performance levels and achieving a better state of health.
            <br />
            The program is accompanied with a set of 15 audio CD’s absolutely free with a comprehensive program manual assisting participants to prepare. The self learning program uses extensive methods and linguistic re-framing combinations to break down old thinking habits, replacing with the new one leading to a better way of decision making and problem solving. It also guides you to express your emotions and behaviour in a constructive manner to enhance productivity.
            The benefits of doing NLP practitioner certification training with our organisations are
            <br />
            World class trainers with years of experience behind.
            Pre-study material that includes 15 high quality audio CD’s and 2 video DVD’s
            Complimentary membership of ANLP
            Certificates are recognized from ANLP, a recognized and famed organization
            Provides participant a workbook to be always in rhythm even after post program reference.
            Program content (Download Brochure)
            Key belief pillars of NLP
            GOALS
            Learn how to set realistic goals and achieve success in all spheres of life
            Guide others in achieving the same feat
            RAPPORT
            A brief understanding about the body language
            Learn how to use soft skills like voice to gain rapport
            How to disagree and still keeping the cool
            Language patterns
            Learn the secrets of hypnotism
            Learn to ask the question gracefully for problem solving
            Learn the art of listening to everyday language and assess when and how people limit themselves
            Learn the art of presumption to leave an impact on others
            Learn to take your stand against people disagreement gracefully
            Anchoring- Freedom to feel what and how you want
            Learn the art to control your feel and emotions
            Learn the art to stop people from being stuck and move towards productive areas
            Strategies
            Learn the art to take your own initiative
            Learn how others take their decision
            Learn the skill to spot the weakness in other’s strategies and fix them
            Find out how to reshape the sales strategy according to customer buying habits
            Neurological levels
            Re-mould your identity, behaviour, environment, capabilities, belief system and values and generate a formula of success.

            Sub-modalities- Unwind your brain
            Eradicate all the phobias and fears permanently
            Learn to change the painful beliefs, habits and feelings causing you the worry
            How to alter the meaning you place on things and events
            Represent yourself through the five senses
            Learn the secret hoe we internally feed the outside world experience
            Learn to read others mind through watching their eyes
            Transform your capabilities to communicate with others
            Changing the perception to obtain optimum results
            Learn to be your own motivator and advisor.

            Learn to resolve inter personal and inter group rifts.

            Learn to extract valuable insights from other field of vision and develop leadership qualities.

            Past integration- A key to personal agreement and harmony
            Learn the methods to maintain good bonding and enhance team spirit working towards the same goal

            Program Schedule


            Search …
            UPCOMING EVENTS
              <hr />
            </section>
            <div className='disqus-position'>
                <ReactDisqusThread
            				shortname="semantro"
            				identifier="something-unique-12345"
            				title="Example Thread"
            				url="http://www.example.com/example-thread"
            				category_id="123456"
            				onNewComment={this.handleNewComment}/>
            </div>
          </div>
          <div className='similar-post'>
            <h2>Similar Posts</h2>
            <p>There are no simlar posts yet</p>
          </div>
        </div>
      )
    }
}
