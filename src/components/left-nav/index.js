import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Menu } from 'antd';
import './index.less'
import {
    ShopOutlined,
    MailOutlined,
    UserAddOutlined,
    TrademarkCircleOutlined,
    AreaChartOutlined,
    LineChartOutlined,
    PieChartOutlined,
    BarChartOutlined,
    WalletOutlined,
    TagsOutlined 
  } from '@ant-design/icons';
  const { SubMenu } = Menu;
 class leftNav extends Component {
    render() {      
        let path = this.props.location.pathname;
        let cpathArr = path.match(/\/\w+/g);
        let cpath = null;
        if(cpathArr!==null&&cpathArr.length>1){
             cpath = cpathArr[0];
        }
        return (
            <div className='left-nav'>
                <header className='left-nav-header'>
                     <img src={logo}/>
                     <Link to='/home'>
                        <h4>商品管理后台</h4>
                     </Link>                     
                </header>
                <Menu         
          defaultOpenKeys={[cpath]}
          selectedKeys={[path]}
          mode="inline"
          theme="dark"
          
        >
          <Menu.Item key="/home" icon={<ShopOutlined />}>
            <Link to={{pathname:'/home',state:{titleName:'首页'}}}>
                首页
            </Link>        
          </Menu.Item>
         
          <SubMenu key="/commodity" icon={<MailOutlined />} title="商品">
            <Menu.Item key="/commodity/category" icon={<WalletOutlined />}>
                <Link to={{pathname:'/commodity/category',state:{titleName:'品类管理'}}}>
                   品类管理
                </Link>
                </Menu.Item>
            <Menu.Item key="/commodity/product" icon={<TagsOutlined />}>
                <Link to={{pathname:'/commodity/product',state:{titleName:'商品管理'}}}>
                   商品管理
                </Link>
                </Menu.Item>
          </SubMenu>
          <Menu.Item key="/user" icon={<UserAddOutlined />}>
            <Link to={{pathname:'/user',state:{titleName:'用户管理'}}}>
                用户管理
            </Link>        
          </Menu.Item>
          <Menu.Item key="/role" icon={<TrademarkCircleOutlined />}>
            <Link to={{pathname:'/role',state:{titleName:'角色管理'}}}>
                角色管理
            </Link>        
          </Menu.Item>
          <SubMenu key="/charts" icon={<AreaChartOutlined />} title="图形图表">
            <Menu.Item key="/charts/bar" icon={<BarChartOutlined />}>
                <Link to={{pathname:'/charts/bar',state:{titleName:'柱状图'}}}>
                     柱状图
                </Link>
                </Menu.Item>
               <Menu.Item key="/charts/line" icon={<LineChartOutlined />}>
                <Link to={{pathname:'/charts/line',state:{titleName:'折线图'}}}>
                     折线图
                </Link>
                </Menu.Item>
                <Menu.Item key="/charts/pie"  icon={<PieChartOutlined />}>
                <Link to={{pathname:'/charts/pie',state:{titleName:'饼状图'}}}>
                    饼图
                </Link>
                </Menu.Item>
          </SubMenu>
        </Menu>
            </div>
        )
    }
}
export default withRouter(leftNav);