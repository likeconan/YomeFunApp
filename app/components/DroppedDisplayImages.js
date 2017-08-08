import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import Styles from './Styles/DroppedDisplayImage';
import IconTextButton from './IconTextButton';
import CloseIcon from './Icons/CloseIcon';
import store from '../store';
import { openCarousel } from '../actions/image.carousel.action';

class DroppedDisplayImages extends Component {

    _openDialog = (key) => {
        if (this.props.allowOpen) {
            store.dispatch(openCarousel(this.props.images, key))
        }
    }
    render() {
        const btnStyle = {
            height: 24,
            borderRadius: 24,
            backgroundColor: '#616161'
        }
        return (
            <View style={[Styles.rootCon]} >
                {
                    this.props.images &&
                    this.props.images.map((img, key) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this._openDialog(key)} key={key}>
                                <Image source={img.source}
                                    resizeMode='cover'
                                    style={[Styles.imageStyle, this.props.imageStyle]}>
                                    {
                                        this.props.allowRemove &&
                                        <View style={[Styles.closeCon]}>
                                            <IconTextButton btnStyle={btnStyle}>
                                                <CloseIcon color='#fff' />
                                            </IconTextButton>
                                        </View>
                                    }
                                </Image>
                            </TouchableWithoutFeedback >
                        )
                    })
                }
            </View >
        );
    }
}

export default DroppedDisplayImages;