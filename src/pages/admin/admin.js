import React, { Component,Fragment } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import storage from '../../utils/storageUtils'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Category from '../category'
import Home from '../home'
import Product from '../product'
import Role from '../role'
import User from '../user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const {Footer, Sider, Content } = Layout;

export default class admin extends Component {
    render() {
        let userInfo = storage.getUser('user_key');
        if(!userInfo){
         return <Redirect to='/login' /> 
        }
        return (
            <Fragment>
                  {/* 后台管理{userInfo.user} */}
                  <Layout style={{height:'100%'}}>
                    <Sider>
                        <LeftNav />
                    </Sider>
                    <Layout>
                      <Header></Header>
                      <Content style={{margin:'20px',backgroundColor:'#fff'}}>
                          <Switch>
                             <Route path='/home' component={Home}/>
                             <Route path='/commodity/product' component={Product}/>
                             <Route path='/commodity/category' component={Category}/>
                             <Route path='/role' component={Role}/>
                             <Route path='/user' component={User}/>
                             <Route path='/charts/bar' component={Bar}/>                 
                             <Route path='/charts/line' component={Line}/>
                             <Route path='/charts/pie' component={Pie}/>
                             <Redirect to='/home'/>
                          </Switch>                           
                      </Content>
                      <Footer style={{textAlign:"center"}}>推荐使用谷歌浏览器获得最佳体验</Footer>
                    </Layout>
                  </Layout>
            </Fragment>
              
          
        )
    }
}
