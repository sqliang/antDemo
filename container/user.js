import React,{Component} from 'react';
import {Breadcrumb} from 'antd';

export default class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>绑定用户</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="ant-layout-container">
                    <div className="ant-layout-content">
                        <div style={{ height: 700 }}>
                            绑定用户内容
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}