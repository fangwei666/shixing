import React,{Component} from 'react';
import axios from 'axios';



import {withRouter} from 'react-router-dom';
import '../sass/home.scss';

import {Carousel,Grid } from 'antd-mobile';
//const Item = List.Item;
//const Brief = Item.Brief;

class Home extends Component{
    constructor(){
        super();
        this.state = {
            ad:[
            {
            	url:'http://pic2.34580.cn/group1/M00/34/3E/wKgNYlwFBRCAHdLOAAL4rm7kAQ8153.jpg'
            },
            {
            	url:'http://pic2.34580.cn/group1/M00/45/2E/wKgNY1v9-cuAJzUgAAC9ajmd0sc659.jpg'
            },
            {
            	url:'http://pic2.34580.cn/group1/M00/48/3F/wKgNY1wDSxiARkePAAElLa8IqHQ832.jpg'
            },
            {
            	url:'http://pic2.34580.cn/group1/M00/32/0A/wKgNYlwBJKGAMMkPAAEg5Z1DVfo499.jpg'
            },
            {
            	url:'http://pic2.34580.cn/group1/M00/33/41/wKgNYlwC6l6AGpylAAF4ESV5L3g395.jpg'
            }
            ],
            goodslist:[],
            shuilist:[],
            helist:[]
        }
//
//      this.handlerClick = this.handlerClick.bind(this);
    }
    componentWillMount(){
		axios.get('https://api1.34580.com/sz/Home/ShortcutIconRequest?sourcetype=9').then(data=>{
			console.log(data.data.Data);
			let res =data.data.Data;
			console.log(res.ShortcutIcons);
			
			this.setState({
				
				goodslist:res
				
			});
			
		});


			axios.get('https://api1.34580.com/sz/Home/FlashSaleRequest?sourcetype=9').then(req=>{

			let reqe =req.data.Data;
			console.log(reqe);
			
			this.setState({
				
				shuilist:reqe
				
			});
			
		});
		
			axios.get('https://api1.34580.com/sz/floors/recommendFloor?accesstoken=98f7e599b82d53d4&customerguid=1c853d8f-c99d-4828-8ac7-97a44b0b78ba&sourcetype=9&CustomerGuid=1c853d8f-c99d-4828-8ac7-97a44b0b78ba&PageIndex=0').then(reqh=>{

			let reql =reqh.data.Data;
			console.log(reql.SourceData);
			
			this.setState({
				
				helist:reql
				
			});
			
		});



		
		
		
    }
    handlerClick(goods){
        //获取history
//      let {history} = this.props;
//      console.log(history);
//      history.push({
//          pathname:'/goods/'+goods.proId,
//          state:goods
//      });
    }
    render(){
        return <div className="ccc">
					<div className="top">
						<div className="top_l">
							<span>苏州市</span>
							<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTggMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdmcvaG9tZV9jaXR5X2Ryb3Bkb3duPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IummlumhtSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzLjAwMDAwMCwgLTgwLjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSLmkJzntKIiIGZpbGw9IiM5OTk5OTkiIHN0cm9rZT0iIzk5OTk5OSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05NS44NDM3NDQ5LDg1LjQ3NTY2NTMgQzk1LjgxODg0OTQsODUuNTA0MzUyIDk1Ljc4MTkzNTMsODUuNDk2NjggOTUuNzU0MTc4Miw4NS41MTgwMjgyIEw4OC45MzEzNjU2LDkyLjgxNDEyMDMgQzg4LjcxODQ2NTcsOTMuMDYxOTU5OSA4OC4zNzMzNjE4LDkzLjA2MTk1OTkgODguMTYwNDYxOSw5Mi44MTQxMjAzIEM4Ny45NDc1NjIsOTIuNTY1OTQ3MSA4Ny45NDc1NjIsOTIuMTYzNjY2MyA4OC4xNjA0NjE5LDkxLjkxNDgyNiBMOTQuNjI4MTU1MSw4NSBMODguMTU5ODg5NSw3OC4wODQxNzMzIEM4Ny45NDY3MDM1LDc3LjgzNjAwMDEgODcuOTQ2NzAzNSw3Ny40MzMzODU4IDg4LjE1OTg4OTUsNzcuMTg1ODc5NyBDODguMzcyNzg5NSw3Ni45MzgwNDAxIDg4LjcxNzg5MzMsNzYuOTM4MDQwMSA4OC45MzA3OTMzLDc3LjE4NTg3OTcgTDk1Ljc1MTg4ODksODQuNDc4NjM2MSBDOTUuNzgwNzkwNiw4NC41MDEzMTg2IDk1LjgxODg0OTQsODQuNDkzNjQ2NiA5NS44NDQzMTcyLDg0LjUyMzY2NzYgQzk1Ljk1NzM0ODgsODQuNjU0NzU5MSA5Ni4wMDU5OTUzLDg0LjgyOTIxNDEgOTUuOTk5NDEzNyw4NS4wMDIwMDE0IEM5Ni4wMDUxMzY4LDg1LjE3MjQ1MzcgOTUuOTU1NjMxOCw4NS4zNDQ5MDc0IDk1Ljg0Mzc0NDksODUuNDc1NjY1MyBaIiBpZD0iaG9tZV9jaXR5X2Ryb3Bkb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Mi4wMDAwMDAsIDg1LjAwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC05Mi4wMDAwMDAsIC04NS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="" />
						</div>
						<div className="top_r">早点买一赠一</div>
					</div>
			<div className="lunbo">
			  <Carousel
                autoplay={true}
                infinite
                >
                {this.state.ad.map(goods => (
                    <a
                    key={goods.url}
                    href="#"
                    style={{height:'220px'}}
                    >
                    <img
                        src={goods.url}
                        style={{ width: '100%', height:'120px', }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                        }}
                    />
                    </a>
                ))}
                </Carousel>
                </div>
               	<ul className="cai">
					<li><img src="http://static.34580.cn/cn/lingquan/sellingpoint1.png" alt="" />比菜场便宜</li>
					<li><img src="http://static.34580.cn/cn/lingquan/sellingpoint2.png" alt="" />必检可追溯</li>
					<li><img src="http://static.34580.cn/cn/lingquan/sellingpoint3.png" alt="" />全程冷链</li>
					<li><img src="http://static.34580.cn/cn/lingquan/sellingpoint4.png" alt="" />极速退款</li>
				</ul>
				<div className="kai">
					<img src="http://pic2.34580.cn/group1/M00/32/9E/wKgNYlwB00GAA6SQAAEf-q2UwYc876.jpg" alt="" />
				 </div>
			<div className="hua">
          		<Grid
            data={this.state.goodslist.ShortcutIcons}
            columnNum={5}
            carouselMaxRow={2}
           
            activeClassName="active" 
            isCarousel={true}
            itemStyle={{height:'78px'}}
            renderItem={(goods,idx)=>{
                return(
                    <div className="goods-item">
                        <img src={goods.URL} />
                        <h4>{goods.Name}</h4>
                        
                    </div>
                )
            }}

            />	 
			</div>
			<p className="tu"><img src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" alt="" /></p>
			
			<p className="dao">
				限时抢购  
			</p>
			<div className="dai">
					<Grid
            data={this.state.shuilist.FlashSaleProducts}
            columnNum={3}
            carouselMaxRow={1}
             dots={false}
            activeClassName="active" 
            isCarousel={true}
            hasLine={false}
            itemStyle={{height:'200px'}}
            renderItem={(good,idx)=>{
                return(
                    <div className="good-item">
                        <img src={`http://picpro-sz.34580.com/sz/ImageUrl/${good.PictureId}/160.jpeg`} />
                        <p className="p4">{good.ProductName}</p>
                        <p className="man">{good.ActivityLabel}</p>
                       <p className="ren"><span className="sdss">￥{good.PeriodMoney}</span>/{good.Unit}<span></span></p>
                    </div>
                )
            }}
//          onClick={this.handlerGotoDetails}
            />
			</div>
			<p className="ni">猜你喜欢</p>
			<div className="li">
					<Grid
            data={this.state.helist.SourceData}
            columnNum={2}
            carouselMaxRow={1}
            activeClassName="active" 
            isCarousel={false}
            hasLine={false}
            itemStyle={{height:'250px'}}
            renderItem={(goood,idx)=>{
                return(
                    <div className="goood-item">
                        <img src={`http://picpro-sz.34580.com/sz/ImageUrl/${goood.PictureIds.slice(0,6)}/500.jpeg`} />
                        <p className="p4">{goood.ProductName}</p>
                     
                       <p className="ren"><span className="sdss">￥{goood.PeriodMoney}</span>/{goood.Unit}<span></span></p>
                    </div>
                )
            }}
//          onClick={this.handlerGotoDetails}
            />
			</div>
			
			
			
			
        </div>
    }
}

Home = withRouter(Home);

export {Home};