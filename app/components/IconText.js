import React, { Component } from 'react';
import { View } from 'react-native';
import CommonText from '../components/CommonText';
import Styles from './Styles/IconText';


class IconText extends Component {
    render() {
        return (
            <View style={[Styles.view]}>
                {this.props.icon}
                <CommonText style={[Styles.textColor]}>
                    {this.props.text}
                </CommonText>
            </View>
        );
    }
}

export default IconText;