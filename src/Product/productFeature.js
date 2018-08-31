import React ,{ Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'semantic-ui-react';

import './productFeature.css';

export default class ProdFeature extends Component{
  constructor(props){
    super(props);
    this.state={
      productfeatures:[],
      featuremain:[]
    }
  }
  componentDidMount(){
    const {productdetailurl} = this.props;
    const {title} = this.props;
      this.setState(
        {
          productfeatures:productdetailurl,
          featuremain:title
        });
  }
  render(){
    const{ productfeatures, featuremain } = this.state;
            if(productfeatures.length){
              return(
                <div className="features-product-main">
                {productfeatures.map(productfeature =>{
                  if(featuremain ===productfeature.title){
                    return(
                        <div key={productfeature.id}>
                        <h2 className ='feature-main-header'>{productfeature.descriptionshort}</h2>
                        <div className="row">
                            {productfeature.features.map((listfeature,index)=>{
                                if((listfeature.featuresid)%2 === 1){
                                  return(
                                    <div className="col-md-6 col-sm-12 features-product-img" key={index}>
                                      <ScrollAnimation
                                          animateIn="slideInLeft"
                                          animateOnce={true}
                                      >
                                       <div className="features-product-detail">
                                            <h3 className = 'feature-header'>{listfeature.featuresheader}</h3>
                                            <p className ='feature-detail'>{listfeature.featuresdetail}</p>
                                       </div>
                                      </ScrollAnimation>
                                    </div>
                                  );
                               }
                               else
                               {
                                 return(
                                   <div className="col-md-6 col-sm-12 features-product-img" key={index}>
                                      <ScrollAnimation
                                          animateIn="slideInRight"
                                          animateOnce={true}
                                      >
                                        <div className="features-product-detail">
                                            <h3 className = 'feature-header'>{listfeature.featuresheader}</h3>
                                            <p className ='feature-detail'>{listfeature.featuresdetail}</p>
                                        </div>
                                      </ScrollAnimation>
                                   </div>
                                 );
                                }
                            }
                            )}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
         }
         else{
              return <div className='loading-icon'><Icon name='spinner' size='huge' /></div>
         }
  }
}
