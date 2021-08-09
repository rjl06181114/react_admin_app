import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {formateDate} from '../../utils/dateUtils'
import {reqWeather} from '../../api/index'
import storageUtils from '../../utils/storageUtils'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {Modal} from 'antd'
import './index.less'
const { confirm } = Modal;
class Header extends Component {
    state={
        currentTime:formateDate(),
        weather:'',
    }
    getTime=()=>{
      this.intervalId =  setInterval(() => {
            let currentTime = formateDate();
            this.setState({currentTime});
        }, 1000);
    }
    getWeather =async ()=>{
       let weather =await reqWeather('广州');
       this.setState({weather});
    }
    onLoginOut = ()=>{
          let that = this;
          confirm({
               title: '确定要退出当前账号?',
               icon: <ExclamationCircleOutlined />,
               onOk() {
                   that.props.history.replace('/login');
                   storageUtils.removeUser('user_key');               
               },
               onCancel() {
                console.log('Cancel');
              },
         });
    }
    componentDidMount(){
         this.getTime();
         this.getWeather();      
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {
        let {currentTime,weather} = this.state;
        let {titleName} = this.props.location.state||'';
        return (
            <div className='header'>
                   <div className = 'header-top'>
                       <span>欢迎,admin</span>
                       <span onClick={this.onLoginOut} className='defaultFont'>退出</span>
                   </div>
                   <div className = 'header-bottom'>
                       <div className='header-bottom-left'>{titleName}</div>
                       <div className='header-bottom-right'>
                           <span>{currentTime}</span>
                           <span>{weather}</span>
                       </div>
                   </div>
            </div>
        )
    }
}
export default withRouter(Header);
