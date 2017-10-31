import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import CommonText from '../components/CommonText';
import IconTextButton from '../components/IconTextButton';
import IconText from '../components/IconText';
import AccountCircleIcon from '../components/Icons/AccountCircleIcon';
import Styles from './Styles/ActivitySearchedItem';
import Images from '../themes/Images';


class ActivitySearchedItem extends Component {


    render() {
        const { data = {
            firstImage: {
                source: { uri: 'http://cdnq.duitang.com/uploads/item/201506/12/20150612060233_RzUEd.thumb.700_0.jpeg' }
            },
            subImages: [{
                source: Images.accountBackground,

            }, {
                source: { uri: 'http://cdnq.duitang.com/uploads/item/201506/12/20150612060233_RzUEd.thumb.700_0.jpeg' }
            }]
        } } = this.props

        return (
            <View style={[Styles.view]}>
                <Image
                    style={[Styles.firstImage]}
                    resizeMode='cover'
                    resizeMethod='scale'
                    source={data.firstImage.source} />
                <View style={[Styles.backCover]} elevation={2}>

                </View>
                <View style={[Styles.subImgCon]} >
                    {
                        data.subImages.map((val, key) => (
                            <Image
                                resizeMode='cover'
                                resizeMethod='scale'
                                key={key}
                                style={[Styles.subImage]}
                                source={val.source} />
                        ))
                    }
                </View>
                <View style={[Styles.userCon]} elevation={3}>
                    <Image
                        source={Images.accountBackground}
                        style={Styles.userHeader} />
                    <View style={[Styles.textCon]}>
                        <View style={[Styles.rowFlex]}>
                            <CommonText style={[Styles.nameStyle]}>Conan</CommonText>
                            <IconTextButton
                                btnStyle={{ borderWidth: 1, borderColor: 'white', width: 80, height: 32 }}
                                backColor='transparent'>
                                邀请
                            </IconTextButton>
                        </View>
                        <CommonText style={[Styles.goingOnStyle]}>What is going on?</CommonText>
                    </View>

                </View>
                <View style={[Styles.contentCon]}>
                    <CommonText style={[Styles.contentStyle]}>我想一起去看大海，有人一起吗？</CommonText>
                </View>
                <View style={[Styles.bottomCon]}>
                    <IconText
                        icon={<AccountCircleIcon/>}
                        text='hello you'/>                    
                </View>
            </View>
        );
    }
}

export default ActivitySearchedItem;