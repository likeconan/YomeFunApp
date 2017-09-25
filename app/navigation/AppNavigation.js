import { StackNavigator } from 'react-navigation'
import Screens from '../screens';
import React from 'react';
import PrimaryNav from './PrimaryNav';
import UserAuthController from '../realm-controllers/user.auth.controller';


var initialed = false;
var signedIn = false;


var obj = UserAuthController.findAll()

console.log(obj)


UserAuthController.save({ token: '123', isAuthorize: true })

debugger

var obj2 = UserAuthController.findAll()

console.log(obj2)

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
