import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Styles from './Styles/ActivityUserItem';
import Images from '../themes/Images';
import CommonStyles from '../themes/Common.Style';
import DroppedDisplayImages from './DroppedDisplayImages';

class ActivityUserItem extends Component {

    _onPress = () => {
        console.log('invite')
    }

    render() {
        const images = [{ source: Images.toyIcon }, { source: {uri:'http://cdnq.duitang.com/uploads/item/201506/12/20150612060233_RzUEd.thumb.700_0.jpeg'} }, { source: Images.accountBackground }, { source: Images.accountBackground }]
        return (
            <View style={[Styles.flex1, Styles.auCon]}>
                <View style={[Styles.flex1, Styles.userBtnCon]}>
                    <View style={Styles.userCon}>
                        <Image
                            source={Images.accountBackground}
                            style={Styles.userHeader} />
                        <View>
                            <Text style={Styles.userNameFont}>Conan</Text>
                            <Text style={Styles.goingOnFont}>What is going on?</Text>
                        </View>
                    </View>
                    <Button
                        title='邀请'
                        color={CommonStyles.secondary}
                        onPress={this._onPress}
                    />

                </View>
                <View style={Styles.activityText}>
                    <Text>我想一起去看大海，有人一起吗？</Text>
                </View>
                <View>
                    <DroppedDisplayImages
                        images={images}
                        allowOpen={true} />
                </View>
            </View>
        );
    }
}

export default ActivityUserItem;