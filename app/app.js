import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import InfoToast from './containers/InfoToast';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={{ height: '100%' }}>
                    <InfoToast />
                    <AppNavigation />
                </View>

            </Provider>
        );
    }
}

export default App;