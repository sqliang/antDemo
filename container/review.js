import React, {Component} from 'react';
import {Breadcrumb, Tabs} from 'antd';

const TabPane = Tabs.TabPane;

export default class Review extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>信息审核</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="ant-layout-container">
                    <div className="ant-layout-content">
                        <div style={{ height: 700 }}>
                            <Tabs type="card">
                                <TabPane tab="未审核" key="1">
                                    
                                </TabPane>
                                <TabPane tab="审核通过" key="2">

                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}