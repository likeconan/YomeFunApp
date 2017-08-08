import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalResponsive from '../components/ModalResponsive';
import { toggleActivityCreateModal } from '../actions/activity.create.action'
import { connect } from 'react-redux';

@connect((store) => {
    return {
        visible: store.activityCreateReducer.visible
    }
})
class CreateActivityModal extends Component {

    _closeModal = () => {
        this.props.dispatch(toggleActivityCreateModal(false))
    }

    render() {
        return (
            <ModalResponsive
                visible={this.props.visible}
                onRequestClose={this._closeModal}>
                <View>
                    <Text>123</Text>
                </View>
            </ModalResponsive>
        );
    }
}

export default CreateActivityModal;