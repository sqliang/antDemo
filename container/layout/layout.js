import React, {Component} from 'react';
import { Menu, Breadcrumb } from 'antd';

const MenuItem = Menu.Item;

import Header from './header';
import Sider from './sider';
import Footer from './footer';
import {Link} from 'react-router';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="container">
                <Sider>
                    <Menu mode="inline" theme="dark"
                          defaultSelectedKeys={['review']}>
                        <MenuItem key="review">
                            <Link to="/review">信息审核</Link>
                        </MenuItem>
                        <MenuItem key="userInfo">
                            <Link to="/user">绑定用户</Link>
                        </MenuItem>
                    </Menu>
                </Sider>
                <div className="ant-layout-main">
                    <Header></Header>
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        )
    }
}