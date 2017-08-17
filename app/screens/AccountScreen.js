import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import FormTextField from '../components/FormTextField';
import FullBackImage from '../components/FullBackImage';
import UserLogin from '../containers/UserLogin';
import Styles from './Styles/AccountScreen';
import Images from '../themes/Images';
import CommonStyle from '../themes/Common.Style';

class AccountScreen extends Component {

    render() {
        StatusBar.setBackgroundColor('#2d2d2d')
        return (
            <View style={Styles.view}>
                <FullBackImage
                    viewStyle={Styles.fullView}
                    imageStyle={Styles.imageStyle}
                    source={Images.accountBackground}>
                    <UserLogin navigation={this.props.navigation} />
                </FullBackImage>
            </View >


        );
    }
}

export default AccountScreen;