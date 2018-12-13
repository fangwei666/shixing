import React,{Component} from 'react';

import { Tabs, Badge } from 'antd-mobile';

import {Switch,Route} from 'react-router-dom';

import Computer from './Computer';

export class List extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[
                {
                    title:'手机',
                    path:'/phone'
                },
                {
                    title:'电脑',
                    path:'/computer'
                },
                {
                    title:'平板',
                    path:'/pad'
                }
            ]
        }

        this.handlerTabClick = this.handlerTabClick.bind(this);
    }

    handlerTabClick(tab,idx){
        //改变url地址
        let {history,match} = this.props;

        //list/:id
        let url = match.path + tab.path
        history.push(url);
    }
    render(){
        console.log(this.props)
        let {match} = this.props;
        return <div className="list">
            <Tabs tabs={this.state.tabs}
            initialPage={1}
            onChange={(tab, index) => {  }}
            onTabClick={this.handlerTabClick}
            >
        
        </Tabs>

        <Switch>
            <Route path={match.url + "/computer"} component={Computer} />
            <Route path={match.url +"/phone"} render={()=><strong>我的手机</strong>} />
            <Route path={match.url +"/pad"} render={()=><strong>我的平板</strong>} />
        </Switch>
        </div>
    }
}
