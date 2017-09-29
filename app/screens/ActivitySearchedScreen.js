import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import ActivityUserItem from '../components/ActivityUserItem';
import ActivitySearchedItem from '../components/ActivitySearchedItem';
import ImageCarousel from '../containers/ImageCarousel';
import CreateActivityModal from '../containers/CreateActivityModal';
import ActivityAction from '../components/ActivityAction';

class ActivitySearchedScreen extends Component {

    componentWillMount() {
        this.props.navigation.state.params.type
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <ActivityUserItem />
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