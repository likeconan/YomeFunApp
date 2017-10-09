import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MessageScreen extends Component {

    render() {
        return (
            <View screenProps={{hello:'123'}}>
                <Text>Message Screen</Text>
            </View>
        )
    }
}

export default MessageScreen;