import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityTypeItem from '../components/ActivityTypeItem';
import { addSearchRecord } from '../actions/search.records.action';
import { getActivityTypes } from '../actions/activity.type.action';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        data: store.activityTypeReducer.activityTypes
    }
})
class ActivityTypeList extends Component {


    componentWillMount() {
        this.props.dispatch(getActivityTypes())
    }


    _onPress = (uuid) => {
        addSearchRecord({
            activityTypeUUID: item.uuid
        })
        this.props.navigate('ActivitySearched', { type: item.name });
    }

    render() {
        const { data } = this.props
        return (
            <View style={{ flex: 1 }}>
                {
                    data.map((item, key) => {
                        return (
                            <ActivityTypeItem
                                item={item}
                                key={key}
                                onPress={() => this._onPress(item)} />
                        )
                    })
                }
            </View>

        );
    }
}

export default ActivityTypeList;