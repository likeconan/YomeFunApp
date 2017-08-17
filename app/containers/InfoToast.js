import React, { Component } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-easy-toast';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        toast: store.toastReducer.toast,
        visible: store.toastReducer.visible
    }
})
class InfoToast extends Component {
    render() {
        const { toast, visible } = this.props
        if (visible) {
            debugger
            this.refs.toast.show(toast.message)
        }
        return (
            <View>
                <Toast ref="toast" />
            </View>
        );
    }
}


export default InfoToast;