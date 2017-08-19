import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import { editMobile, userLogin, editPassword } from '../actions/user.login.action'
import FormTextField from '../components/FormTextField';
import AccountCircleIcon from '../components/Icons/AccountCircleIcon'
import LockIcon from '../components/Icons/LockIcon'
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
            }).catch(() => {
                this.setState({
                    isLoading: false
                })
            })
        }
    }

    render() {
        const { loginViewModel, validation, loading } = this.props;

        return (
            <View style={[Styles.view]}>
                <FormTextField
                    icon={<AccountCircleIcon color='white' />}
                    value={loginViewModel.mobile}
                    placeholder='手机号'
                    textConStyle={Styles.textConStyle}
                    textInputStyle={Styles.textInputStyle}
                    submitted={this.state.submitted}
                    keyboardType='phone-pad'
                    errorText='请输入有效的手机号'
                    placeholderTextColor='white'
                    validated={validation.validatedMobile}
                    onChangeText={(val) => this.props.dispatch(editMobile(val))} />
                <FormTextField
                    icon={<LockIcon color='white' />}
                    value={loginViewModel.password}
                    textConStyle={Styles.textConStyle}
                    textInputStyle={Styles.textInputStyle}
                    placeholder='密码'
                    placeholderTextColor='white'
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