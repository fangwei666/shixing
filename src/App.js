import React,{ Component } from 'react';
import {} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import { TabBar } from 'antd-mobile';
import {Home} from './components/Home';
import {List} from './components/List';
import {Cruwn} from './components/Cruwn';
import {Cart} from './components/Cart';
import {Personl} from './components/Personl';
import {Lie} from './components/Lie';
import {Goods} from './components/Goods';
	
//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';

import './sass/page.scss';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faListUl,
    faShoppingCart,
    faCrown,
	faUser} from '@fortawesome/free-solid-svg-icons'

library.add(
    faHome,
    faListUl,
    faShoppingCart,
    faCrown,
    faUser
    )




class App extends Component {
	constructor(){
        super();
        this.state = {
            tabs:[
                {
                    title:'首页',
                    path:'/home',
                    icon:'home'
                },
                {
                    title:'分类',
                    path:'/list',
                    icon:'list-ul'
                },
                {
                    title:'Max商城',
                    path:'/cruwn',
                    icon:'crown'
                },
                {
                    title:'购物车',
                    path:'/cart',
                    icon:'shopping-cart'
                },
                {
                    title:'我的',
                    path:'/personl',
                    icon:'user'
                }
                
            ],
            currentTab:0
        }
    }

    handlerClick(idx,path){
        this.setState({
            currentTab:idx
        });

        //编程式导航
        //获取history的方式
        // * 通过Route渲染App
        // * 利用withRouter高阶组件实现
        this.props.history.push(path);

    }

    componentWillMount(){
        //获取hash值
        let hash = window.location.hash.slice(1);//#list

        //找出对应索引值
        let currentTab = 0
        this.state.tabs.some((item,idx)=>{
            currentTab = idx;
            return item.path === hash
        });

        this.setState({
            currentTab
        });
    }
	
	
	
	
  render() {
    return (
      <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/cruwn" component={Cruwn} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/personl" component={Personl} />
          			<Route path="/Lie" component={Lie} />
          			<Route path="/Goods" component={Goods} />
          			
                </Switch>
            </div>
            <TabBar
                tintColor="#58bc58"
                noRenderContent={true}
                >
                {
                    this.state.tabs.map((tab,idx)=>{
                        return <TabBar.Item
                            title={tab.title}
                            key={tab.path}
                            icon={<FontAwesomeIcon icon={tab.icon}/>}
                            selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
                            selected={this.state.currentTab === idx}
                            onPress={this.handlerClick.bind(this,idx,tab.path)}
                            >
                            {tab.title}
                            </TabBar.Item>
                    })
                }
                
            </TabBar>
        </div>
    );
  }
}
App = withRouter(App);
export default App;
