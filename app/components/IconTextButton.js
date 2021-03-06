import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Button from 'apsl-react-native-button'

class IconTextButton extends Component {
    render() {
        const backColor = this.props.backColor ? this.props.backColor : '#2196F3';
        const fontColor = this.props.fontColor ? this.props.fontColor : '#fff';
        const borderRadius = this.props.borderRadius ? this.props.borderRadius : 5;
        return (
            <Button style={Object.assign({
                borderColor: 'transparent',
                backgroundColor: backColor,
                borderRadius: borderRadius
            }, this.props.btnStyle)}
                textStyle={Object.assign({ color: fontColor }, this.props.textStyle)}
                onPress={this.props.onPress}
                isLoading={this.props.isLoading}
                disabledStyle={{
                    backgroundColor: backColor
                }}
                activityIndicatorColor={fontColor}
            >
                {this.props.children}
            </Button>
        );
    }
}

export default IconTextButton;