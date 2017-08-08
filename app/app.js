import React, { Component } from 'react';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}

export default App;