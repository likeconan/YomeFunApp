import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './store';
import { userAuth } from './actions/user.auth.action';
import UserAuthController from './realm-controllers/user.auth.controller';
import SplashScreen from 'react-native-splash-screen'

class App extends Component {

    state = {
        isLogged: false
    }

 

    componentWillMount() {
        userAuth().then((res) => {
            store.dispatch()
        })
        var auth = UserAuthController.getAuth()
       
    }

    componentDidMount() {
       SplashScreen.hide();
    }
    

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    {
                        this.signedIn ?
                            <AppNavigation />
                            :
                            <PrimaryNav />
                    }
                </View>
            </Provider>
        );
    }
}

export default App;