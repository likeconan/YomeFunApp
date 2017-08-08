import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import PlayListAddIcon from './Icons/PlayListAddIcon';
import CommonStyles from '../themes/Common.Style';
import store from '../store'
import { toggleActivityCreateModal } from '../actions/activity.create.action'

class ActivityAction extends Component {
    render() {
        return (
            <ActionButton
                buttonColor={CommonStyles.primary}
                size={48}>
                <ActionButton.Item
                    buttonColor='white'
                    title="新增活动"
                    onPress={() => store.dispatch(toggleActivityCreateModal(true))}>
                    <PlayListAddIcon color={CommonStyles.primary} />
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

export default ActivityAction;