import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Styles from './Styles/ImageCarousel';
import PhotoView from 'react-native-photo-view'
import ModalResponsive from '../components/ModalResponsive';
import { connect } from 'react-redux';
import { closeCarousel } from '../actions/image.carousel.action';
import Matrix from '../themes/Matrix';

@connect((store) => {
    return {
        visible: store.imageCarouselReducer.visible,
        images: store.imageCarouselReducer.images,
        firstItem: store.imageCarouselReducer.firstItem
    }
})




class ImageCarousel extends Component {

    _closeImageDialog = () => {
        this.props.dispatch(closeCarousel())
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{
                height: '100%'
            }}>
                <View style={Styles.imgConStyle}>
                    <PhotoView
                        source={item.source}
                        onTap={this._closeImageDialog}
                        onViewTap={this._closeImageDialog}
                        maximumZoomScale={3}
                        androidScaleType="fitCenter"
                        style={{ width: Matrix.width, minHeight: '100%', maxHeight: '100%' }} />
                </View>

            </View>
        )
    }

    render() {
        console.log('img carousel')
        return (
            <ModalResponsive
                visible={this.props.visible}
                onRequestClose={this._closeImageDialog}>
                <Carousel
                    sliderWidth={Matrix.width}
                    itemWidth={Matrix.width}
                    renderItem={this._renderItem}
                    data={this.props.images}
                    firstItem={this.props.firstItem}
                >
                </Carousel>
            </ModalResponsive>

        );
    }
}

export default ImageCarousel;