import { TabNavigator } from 'react-navigation'
import React from 'react';
import ToyIcon from '../components/Icons/ToyIcon';
import BubbleChatIcon from '../components/Icons/BubbleChatIcon';
import PersonIcon from '../components/Icons/PersonIcon';
import CameraIcon from '../components/Icons/CameraIcon';
import Screens from '../screens';
// import ActivityNav from './ActivityNav';


const PrimaryNav = TabNavigator(
    {
        Activity: {
            screen: Screens.ActivityListScreen,
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
        StarSocial: {
            screen: Screens.StarSoicalScreen,
            navigationOptions: {
                tabBarLabel: '明星圈',
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <CameraIcon color={tintColor} />
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

export default PrimaryNav