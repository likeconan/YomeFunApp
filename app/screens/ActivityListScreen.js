import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityTypeList from '../containers/ActivityTypeList';
import { StatusBar } from 'react-native';
import NavigationHelper from '../lib/navigation.helper';

class ActivityListScreen extends Component {


    componentWillUnmount(){
        console.log('1')
    }
   componentDidUpdate(prevProps, prevState) {
    console.log('1')
   }
   

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