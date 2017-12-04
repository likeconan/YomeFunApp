import { StackNavigator } from 'react-navigation'
import Screens from '../screens';
import React from 'react';
import PrimaryNav from './PrimaryNav';
import ActivityNav from './ActivityNav';
import UserAuthController from '../realm-controllers/user.auth.controller';
import NavigationHelper from '../lib/navigation.helper';

var auth = UserAuthController.getAuth()
var initialed = auth.isInitialed;

var initialRouteName = initialed ? 'Account' : 'AppIntro';


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
      navigationOptions: ({ navigation }) => {
        NavigationHelper.setNavigation(navigation)
        return {
          gesturesEnabled: false
        }
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: initialRouteName
  }
);



export default AppNavigation
