import Screens from '../screens';
import { StackNavigator } from 'react-navigation'
import CommonStyle from '../themes/Common.Style';
import Enumerator from '../lib/enumerator';
import React from 'react';

const ActivityNav = StackNavigator(
    {
        ActivityList: {
            screen: Screens.ActivityListScreen,
            navigationOptions: {
                header: null,
            }
        },
        ActivitySearched: {
            screen: Screens.ActivitySearchedScreen,
            navigationOptions: ({ navigation }) => ({
                title: `${Enumerator.typeTitle[navigation.state.params.type]}`,
                headerTitleStyle: {
                    color: 'white',
                },
                headerTintColor: 'white',
                tarBarVisible: false,
                headerStyle: {
                    backgroundColor: CommonStyle.primary
                }
            })
        }
    },
    {
        mode: 'modal',
        initialRouteName: 'ActivityList'
    }
)

export default ActivityNav