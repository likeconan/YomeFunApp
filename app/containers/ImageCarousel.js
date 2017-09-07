import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Styles from './Styles/ImageCarousel';
import PhotoView from 'react-native-photo-view'
import ModalResponsive from '../components/ModalResponsive';
import { connect } from 'react-redux';
import { closeCarousel } from '../actions/image.carousel.action';

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
    render() {
        const width = Dimensions.get('window').width;
        return (
            <ModalResponsive
                visible={this.props.visible}
                onRequestClose={this._closeImageDialog}>
                <Carousel
                    sliderWidth={width}
                    itemWidth={width}
                    firstItem={this.props.firstItem}
                >
                    {
                        this.props.images.map((img, key) => {
                            return (
                                <TouchableWithoutFeedback
                                    key={key}
                                    onPress={this._closeImageDialog}>
                                    <View style={{
                                        height: '100%'
                                    }}>
                                        <View style={Styles.imgConStyle}>
                                            <PhotoView
                                                source={img.source}
                                                maximumZoomScale={3}
                                                androidScaleType="fitCenter"
                                                style={{ width: width, minHeight: '100%', maxHeight: '100%' }} />
                                        </View>

                                    </View>
                                </TouchableWithoutFeedback>
                            )


                        })
                    }
                </Carousel>
            </ModalResponsive>

        );
    }
}

export default ImageCarousel;