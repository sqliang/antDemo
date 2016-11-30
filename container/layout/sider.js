import React, {Component} from 'react';

export default class Sider extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <aside className="ant-layout-sider">
                <div className="ant-layout-logo"></div>
                {this.props.children}
            </aside>
        )
    }
}