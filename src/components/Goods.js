
import React, {
	Component
} from 'react';
//import {Tabs } from 'antd-mobile';
import { Carousel, Button, WhiteSpace, WingBlank,Tabs  } from 'antd-mobile';
import axios from 'axios';
import {Switch,Route} from 'react-router-dom';
import '../sass/goods.scss';




class Goods extends Component{
		constructor(){
        super();
         this.state = {
            //列表
            goodslist:[],
          tabs:[
      	{ 
      		title: '商品',
      		path:'/shang'
      	},
  		{ 
  			title: '详情',
  			path:'/details'
  			
  		},
  		{ title: '评价',
  			path:'/appraise'
  		}
      	],
      	lunbolist:[],
        }
	
	}
		
		
	componentWillMount(){
	  	let Id=this.props.location.pathname.slice(7);

	  	
	  
		axios.get('https://api1.34580.com/sz/Products/ProductDetailRequest',{
			params:{
				accesstoken: '98f7e599b82d53d4',
				customerguid: '1c853d8f-c99d-4828-8ac7-97a44b0b78ba',
				sourcetype: 9,
				id:Id
				
			}
		}).then(data=>{
			console.log(data.data.Data);
			let res =data.data.Data.ProductInfo;
			console.log(res);
				
			this.setState({
				lunbolist:res.Banners
				
				 
			});
			
		});
			 							
    } 
	
	
	
	

	render(){
		
			
		return <div className="xiang">
			<div className="goodd">
				<Tabs tabs={this.state.tabs} initialPage={2} animated={false} useOnPan={false} swipeable={false}>
				 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
          			<div className="goodds">
          		<Carousel
                autoplay={true}
                dots={true}
                infinite
                >
                {this.state.lunbolist.map(goods => (
                    <a
                    key={goods}
                    href="#"
                    style={{height:'640px'}}
                    >
                    <img
                        src={`http://picpro-sz.34580.com/sz/ImageUrl/${goods}/800.jpeg`}
                        style={{ width: '100%', height:'340px', }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                        }}
                    />
                    </a>
                ))}
                </Carousel>
          			
          			</div>
        		</div>
        
    			</Tabs>
			</div>
		
		
		</div>
	}
}

export {Goods};


























