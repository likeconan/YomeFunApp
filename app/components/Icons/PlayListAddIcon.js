import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

class PlayListAddIcon extends Component {
    render() {
        return (
            <Svg height="24" viewBox="0 0 24 24" width="24" >
                <Path d="M0 0h24v24H0z" fill="none" />
                <Path fill={this.props.color} d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" />
            </Svg>
        );
    }
}

export default PlayListAddIcon;