import { StackNavigator, TabNavigator } from 'react-navigation'
import { Platform } from 'react-native';
import Screens from '../screens';
import React from 'react';
import ToyIcon from '../components/Icons/ToyIcon';
import BubbleChatIcon from '../components/Icons/BubbleChatIcon';
import PersonIcon from '../components/Icons/PersonIcon';
import HeaderInput from '../containers/HeaderInput';
import enumerator from '../lib/enumerator';
import CommonStyle from '../themes/Common.Style';

// Manifest of possible screens
const ActivityNav = StackNavigator(
  {
    ActivityList: {
      screen: Screens.ActivityListScreen,
      navigationOptions: {
        header: null
      }
    },
    ActivitySearched: {
      screen: Screens.ActivitySearchedScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${enumerator.typeTitle[navigation.state.params.type]}`,
        headerRight: Platform.OS === 'ios' ? null : <HeaderInput type={navigation.state.params.type} />,
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: CommonStyle.primary
        }
      })
    }
  }
)


const PrimaryNav = TabNavigator(
  {
    Activity: {
      screen: ActivityNav,
      navigationOptions: {
        tabBarLabel: '活动',
        tabBarIcon: ({ tintColor }) => {
          return (
            <ToyIcon color={tintColor} />
          )
        },
      }
    },
    Message: {
      screen: Screens.MessageScreen,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor }) => {
          return (
            <BubbleChatIcon color={tintColor} />
          )
        }
      },
    },
    Profile: {
      screen: Screens.ProfileScreen,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor }) => (
          <PersonIcon color={tintColor} />
        ),
      },
    }

  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'Activity',
    tabBarOptions: {
      activeTintColor: '#03A9F4',
      inactiveTintColor: '#66757f',
      indicatorStyle: {
        backgroundColor: '#03A9F4'
      },
      style: {
        backgroundColor: 'white',
      },
      showIcon: true
    }
  })



const AppNavigation = (initialed = false, signedIn = false) => {
  var initialRouteName = 'Main';
  if (!initialed) {
    initialRouteName = 'AppIntro'
  } else if (initialed && !signedIn) {
    initialRouteName = 'Account'
  }

  return StackNavigator(
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
}




export default AppNavigation
