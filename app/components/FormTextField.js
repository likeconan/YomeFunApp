import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import CommonText from './CommonText';
import Styles from './Styles/FormTextField';


class FormTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
    _focus = () => {
        this.setState({ focused: true });
    }
    _blur = () => {
        this.setState({ blured: true })
    }

    render() {
        return (
            <View style={[Styles.view, this.props.viewStyle]} keyboardShouldPersistTaps='handled'>
                <View style={[Styles.textCon]}>
                    {this.props.icon}
                    <TextInput
                        value={this.props.value}
                        style={[Styles.textInput]}
                        autoCorrect={false}
                        keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.secure}
                        underlineColorAndroid='transparent'
                        onBlur={this._blur}
                        onFocus={this._focus}
                        onChangeText={this.props.onChangeText} />
                </View>

                <CommonText style={Styles.errorText}>
                    {(this.state.focused && this.state.blured || this.props.submitted) && !this.props.validated ? this.props.errorText : ''}
                </CommonText>
            </View>
        );
    }
}

export default FormTextField;