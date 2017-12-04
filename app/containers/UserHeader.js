import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.userReducer.loggedUser
    }
})
class UserHeader extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UserHeader;