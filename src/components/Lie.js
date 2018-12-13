import React, {
	Component
} from 'react';

import { Tabs, WhiteSpace } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import axios from 'axios';
import '../sass/lis.scss';



class Lie extends Component{
	 constructor(){
        super();
      this.state={
      	goodlist:[],
      	tabs:[
      	{ title: '默认' },
  		{ title: '最新' },
  		{ title: '销量' },
  		{ title: '价格' },
      	]
      	
      }
   this.handGoods = this.handGoods.bind(this);  
     }
	  componentWillMount(){
	  	let Id=this.props.location.pathname.slice(5);
	  	console.log(Id);
	  	
	  	console.log(Id);
		axios.get('https://api1.34580.com/sz/ProductRequests/ProductMultiConditionRequest',{
			params:{
				accesstoken: '98f7e599b82d53d4',
				customerguid: '1c853d8f-c99d-4828-8ac7-97a44b0b78ba',
				sourcetype: 9,
				json: {"CategoryIds":[Id],"PageIndex":1,"PageSize":20,"OrderDirectionType":0,"OrderFieldType":0,"sourcetype":"9"}
			}
		}).then(data=>{
//			console.log(data.data.Data);
			let res =data.data.Data.SourceData;
			console.log(res);
				
			this.setState({
				
				 goodlist:res
				 
			});
			
		});
			 							
    } 
	 
	handGoods(goood){

			console.log(this.props);
		let {history} = this.props;
//      console.log(history);
          history.push({
            pathname:'/Goods/'+goood.ProductId
//          state:goods
        });
	
       
	}
	 
	 
	render(){
		return <div className="lie">
		<div className="sou">
			<img src="https://wechatx.34580.com/static/img/home_search_cont.427135f.png" alt="" />
		</div>
			<div className="goodd">
				<Tabs tabs={this.state.tabs} initialPage={2} animated={false} useOnPan={false}>
    			</Tabs>
			</div>
			<div className="goods">
				<Grid
            data={this.state.goodlist}
            columnNum={2}
            carouselMaxRow={1}
//          activeClassName="active" 
            isCarousel={false}
            hasLine={false}
            itemStyle={{height:'190px'}}
            renderItem={(goood,idx)=>{
                return(
                    <div className="goood-item" >
                        <img src={`http://picpro-sz.34580.com/sz/ImageUrl/${goood.PictureId}/500.jpeg`} className="p2"/>
                        <p className="p4">{goood.ProductName}</p>
                     	<p className="p5">{goood.PvStandard}</p>
                      	<p className="p6">￥{goood.MaxPeriodMoney}
                      	<img className="p7" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTQ1NTI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjEwMSwyMy45NDVoMy4wMzNjMCwwLDEuMTE2LDAuMjExLDEuMTE2LDEuNzI4CiAgICBsMi4yNjUsMTYuODE3YzAsMCwwLjA2OSwwLjc3NiwxLjA0NSwwLjc3NmgxNS44NTkiLz4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNFNDU1MjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjguNTUxLDI3LjkyaDE4Ljg2OGMwLDAsMS40NjUtMC4wMjcsMS40NjUsMS4zMTMKICAgIGMwLDAtMC42ODUsNS43OTUtMS43MDksNy44MjdjMCwwLTAuNjU5LDEuODMzLTMuMzExLDIuMTg4YzAsMC0xMy41OTMsMS42MTUtMTMuNTkzLDEuNDMyTDI4LjU1MSwyNy45MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNMzIuNTcxLDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzMKICAgIGMtMC45NDcsMC0xLjcxNS0wLjc3NS0xLjcxNS0xLjczM0MzMC44NTYsNDYuNDU2LDMxLjYyNCw0NS42ODIsMzIuNTcxLDQ1LjY4MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNNDMuOTg3LDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzNzLTEuNzE1LTAuNzc1LTEuNzE1LTEuNzMzCiAgICBDNDIuMjcyLDQ2LjQ1Niw0My4wNCw0NS42ODIsNDMuOTg3LDQ1LjY4MnoiLz4KPC9nPgo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ExQTFBMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iMzYuNDkyIiBjeT0iMzYuNTQ3IiByPSIyNS42NjciLz4KPC9zdmc+Cg==" alt="" />
                      	</p>
                    </div>
                )
            }}
			onClick={this.handGoods}
            />
			
			</div>
		</div>
	}
}

export {Lie};