import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="ant-layout-header">
                {this.props.children}
            </div>
        )
    }
}