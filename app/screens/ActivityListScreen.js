import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityTypeList from '../containers/ActivityTypeList';

class ActivityListScreen extends Component {

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <ActivityTypeList navigation={navigation} />
            </View>
        )
    }
}

export default ActivityListScreen;