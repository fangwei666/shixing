import React, {
	Component
} from 'react';
import {Tabs } from 'antd-mobile';
import axios from 'axios';

import '../sass/list.scss';


const tabs = [
]
;
 let k;
class List extends Component {
	 constructor(){
        super();
         this.state = {
            //列表
            shanglist:[],
            pinlist:[],
            xia:0,
        }
	
	}
	 
	
	 handlerGotoDetails(goods,idex){
	 		k=idex
	
    }
	 
	    componentWillMount(){
		axios.get('https://api1.34580.com/sz/Products/BigCategoryRequest?sourcetype=9').then(data=>{
//			console.log(data.data.Data);
			let res =data.data.Data;

				
			this.setState({
				
				 shanglist:res
				 
			});
			
		});
			
			axios.get('https://api1.34580.com/sz/Products/SubCategoryRequest?accesstoken=98f7e599b82d53d4&customerguid=1c853d8f-c99d-4828-8ac7-97a44b0b78ba&sourcetype=9',{
			params:{	
				id:100840,
			}
			}).then(res=>{
				
		
			this.setState({
				pinlist:res.data.Data.SubCategories
			});
		});

			 							
    } 
    
     handList(index,item){    	
     	this.setState({xia:index});
     	
     	let kk=item.Id;  
     	
     		axios.get('https://api1.34580.com/sz/Products/SubCategoryRequest?accesstoken=98f7e599b82d53d4&customerguid=1c853d8f-c99d-4828-8ac7-97a44b0b78ba&sourcetype=9',{
			params:{	
				id:kk,
			}
		}).then(res=>{
				
			
			this.setState({
				pinlist:res.data.Data.SubCategories
			});
		});
     }
     
     chuanList(item1){
     	console.log(item1.Id);
     	let {history} = this.props;
        console.log(history);
          history.push({
            pathname:'/Lie/'+item1.Id
//          state:goods
        });
     	
     }
     
     
	render() {      
		
		return <div>
					<p>推荐分类</p>
				<ul className="ulist">
            	{
                this.state.shanglist.map((item,index)=>(
                   
                     <li key={index} className={this.state.xia==index?'active':''} onClick={this.handList.bind(this,index,item)}>{item.Name}</li>
                ))
           		}
            	</ul>
				<div className="xin">
				   {
                  this.state.pinlist.map((items,index)=>(
                  	<div key={index}>
						<h6>{items.MetaKeywords}</h6>
                        	{
                            items.SmallCategories.map((item1,number)=>(
                            	<div className="feng" key={number} onClick={this.chuanList.bind(this,item1)}>
                            	<img src={`http://picpro-sz.34580.com/sz/ImageUrl/${item1.PictureId}/160.jpeg`} />
                            	
                            	<p id={number}>{item1.Name}</p>
                            	</div>
                            ))
                        }
                        </div> 
                  ))  
             }			
				</div>
		</div>
	}
}

export {
	List
};