import React, { Component } from 'react';
import { Text } from 'react-native'
import Styles from './Styles/CommonText'


class CommonText extends Component {
    render() {
        return (
            <Text style={[Styles.textStyle, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}

export default CommonText;