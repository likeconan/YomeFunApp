import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityTypeList from '../containers/ActivityTypeList';
import { StatusBar } from 'react-native';

class ActivityListScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <ActivityTypeList navigate={navigate} />
            </View>
        )
    }
}

export default ActivityListScreen;