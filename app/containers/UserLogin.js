import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import { editMobile, userLogin, editPassword } from '../actions/user.login.action'
import FormTextField from '../components/FormTextField';
import IconTextButton from '../components/IconTextButton';
import Styles from './Styles/UserLogin';


@connect((store) => {
    return {
        loginViewModel: store.userLoginReducer.loginViewModel,
        validation: store.userLoginReducer.validation,
    }
})
class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            isLoading: false
        }
    }


    _login = () => {
        this.setState({
            submitted: true
        });
        if (this.props.validation.validatedMobile && this.props.validation.validatedPassword) {
            this.setState({
                isLoading: true
            })
            userLogin(this.props.loginViewModel).then((data) => {
                this.setState({
                    isLoading: false
                })
                this.props.dispatch(data);
                const { navigate } = this.props.navigation;
                navigate('Main')
            })
        }
    }

    render() {
        const { loginViewModel, validation, loading } = this.props;

        return (
            <View style={[Styles.view]}>
                <FormTextField
                    value={loginViewModel.mobile}
                    placeholder='手机号'
                    white={true}
                    submitted={this.state.submitted}
                    keyboardType='phone-pad'
                    errorText='请输入有效的手机号'
                    validated={validation.validatedMobile}
                    onChangeText={(val) => this.props.dispatch(editMobile(val))} />
                <FormTextField
                    value={loginViewModel.password}
                    placeholder='密码'
                    white={true}
                    submitted={this.state.submitted}
                    secure={true}
                    errorText='请输入至少6位数的密码'
                    validated={validation.validatedPassword}
                    onChangeText={(val) => this.props.dispatch(editPassword(val))} />
                <IconTextButton onPress={this._login} isLoading={this.state.isLoading}>
                    悦，遇你所想
                </IconTextButton>
            </View>

        );
    }
}



export default UserLogin;