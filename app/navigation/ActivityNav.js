import Screens from '../screens';
import { StackNavigator } from 'react-navigation'
import CommonStyle from '../themes/Common.Style';
import Enumerator from '../lib/enumerator';
import React from 'react';
import NavigationHelper from '../lib/navigation.helper';

const ActivityNav = StackNavigator(
    {
        ActivityList: {
            screen: Screens.ActivityListScreen,
            navigationOptions: ({ navigation }) => {
                NavigationHelper.toggleSwipeEnable(true)
                return {
                    header: null,
                    gesturesEnabled: true,
                }
            }
        },
        ActivitySearched: {
            screen: Screens.ActivitySearchedScreen,
            navigationOptions: ({ navigation }) => ({
                title: `${Enumerator.typeTitle[navigation.state.params.type]}`,
                headerTitleStyle: {
                    color: 'white',
                },
                gesturesEnabled: true,
                headerTintColor: 'white',
                tabBarVisible: false,
                headerStyle: {
                    backgroundColor: CommonStyle.primary
                }
            })
        }
    },
    {
        headerMode: 'screen',
        initialRouteName: 'ActivityList'
    }
)

export default ActivityNav