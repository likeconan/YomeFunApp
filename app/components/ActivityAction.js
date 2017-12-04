import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import PlayListAddIcon from './Icons/PlayListAddIcon';
import Colors from '../themes/Colors';
import store from '../store'
import { toggleActivityCreateModal } from '../actions/activity.create.action'

class ActivityAction extends Component {
    render() {
        return (
            <ActionButton
                buttonColor={Colors.primary}
                size={48}>
                <ActionButton.Item
                    buttonColor='white'
                    title="新增活动"
                    onPress={() => store.dispatch(toggleActivityCreateModal(true))}>
                    <PlayListAddIcon color={Colors.primary} />
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

export default ActivityAction;