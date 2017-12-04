import { TabNavigator, TabBarBottom } from 'react-navigation'
import React from 'react';
import { View } from 'react-native';
import CommonText from '../components/CommonText';
import ToyIcon from '../components/Icons/ToyIcon';
import BubbleChatIcon from '../components/Icons/BubbleChatIcon';
import PersonIcon from '../components/Icons/PersonIcon';
import CameraIcon from '../components/Icons/CameraIcon';
import Screens from '../screens';
import ActivityNav from './ActivityNav';


const PrimaryNav = TabNavigator(
    {
        Activity: {
            screen: ActivityNav,
            navigationOptions: {
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
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <BubbleChatIcon color={tintColor} />
                    )
                },
            },
        },
        StarSocial: {
            screen: Screens.StarSoicalScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <CameraIcon color={tintColor} />
                    )
                },
            },
        },

    },
    {
        tabBarPosition: 'top',
        initialRouteName: 'Activity',
        lazy: true,
        tabBarComponent: (props) => {
            return (
                <View>
                    <CommonText>123</CommonText>
                    <TabBarBottom {...props} />
                </View>
            )

        },
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#03A9F4',
            inactiveTintColor: '#66757f',
            indicatorStyle: {
                backgroundColor: '#03A9F4'
            },
            style: {
                backgroundColor: 'white',
            },
            showIcon: true
        },

    })

export default PrimaryNav