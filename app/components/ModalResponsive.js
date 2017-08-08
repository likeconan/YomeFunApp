import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import IconTextButton from './IconTextButton';
import CloseIcon from './Icons/CloseIcon';
import Styles from './Styles/ModalResponsive';

class ModalResponsive extends Component {

    render() {
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={this.props.onRequestClose}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: '#212121' }}>
                            {this.props.children}
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}

export default ModalResponsive;