import React, { Component } from 'react';
import AppIntro from 'react-native-app-intro';
import { Alert } from 'react-native';
class AppIntroScreen extends Component {
    onSkipBtnHandle = (index) => {
        Alert.alert('Skip');
        console.log(index);
    }
    doneBtnHandle = () => {
        const { navigate } = this.props.navigation;
        navigate('Account')
    }
    nextBtnHandle = (index) => {
        Alert.alert('Next');
        console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }
    render() {
        const pageArray = [{
            title: 'Page 1',
            description: 'Description 1',
            img: 'https://goo.gl/Bnc3XP',
            imgStyle: {
                height: 80 * 2.5,
                width: 109 * 2.5,
            },
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 2',
            description: 'Description 2',
            img: 'https://goo.gl/Bnc3XP',
            imgStyle: {
                height: 93 * 2.5,
                width: 103 * 2.5,
            },
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }];
        return (
            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
                pageArray={pageArray}
            />
        );
    }
}

export default AppIntroScreen;