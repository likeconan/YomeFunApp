import React, { Component } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

class LockIcon extends Component {
    render() {
        return (
            <Svg
                height={this.props.height ? this.props.height : '24'}
                viewBox="0 0 24 24"
                width={this.props.width ? this.props.width : '24'} >
                <Path d="M0 0h24v24H0z" fill="none" />
                <Path fill={this.props.color} d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </Svg>
        );
    }
}

export default LockIcon;