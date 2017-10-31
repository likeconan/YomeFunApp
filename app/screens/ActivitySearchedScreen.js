import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import ActivityUserItem from '../components/ActivityUserItem';
import ActivitySearchedItem from '../components/ActivitySearchedItem';
import ImageCarousel from '../containers/ImageCarousel';
import CreateActivityModal from '../containers/CreateActivityModal';
import ActivityAction from '../components/ActivityAction';
import Colors from '../themes/Colors';

class ActivitySearchedScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.blueGrey50 }}>
                <ScrollView >
                    <ActivitySearchedItem />
                    <ImageCarousel />
                    <CreateActivityModal />
                </ScrollView>
                <ActivityAction />
            </View>

        )
    }
}

export default ActivitySearchedScreen;