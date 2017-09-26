import { StackNavigator } from 'react-navigation'
import Screens from '../screens';
import React from 'react';
import PrimaryNav from './PrimaryNav';
import UserAuthController from '../realm-controllers/user.auth.controller';


debugger

var auth = UserAuthController.getAuth()
var initialed = auth.isInitialed;
var signedIn = auth.isAuthorize;


var initialRouteName = 'Main';
if (!initialed) {
  initialRouteName = 'AppIntro'
} else if (initialed && !signedIn) {
  initialRouteName = 'Account'
}




const AppNavigation = StackNavigator(
  {
    AppIntro: {
      screen: Screens.AppIntroScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Account: {
      screen: Screens.AccountScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Main: {
      screen: PrimaryNav,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: initialRouteName
  }
);



export default AppNavigation
