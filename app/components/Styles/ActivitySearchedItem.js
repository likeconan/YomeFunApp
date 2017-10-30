import { StyleSheet } from 'react-native'
import CommonStyle from '../../themes/Common.Style';
import Colors from '../../themes/Colors';

export default Styles = StyleSheet.create({
    view: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    firstImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    backCover: {
        height: 95,
        marginTop: -95,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    subImage: {
        height: 75,
        width: 120,
        borderRadius: 5,
        marginHorizontal: 5
    },
    subImgCon: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        marginTop: -95,
    },
    userCon: {
        flexDirection: 'row',
        marginTop: -40,
        paddingHorizontal: 20
    },
    userHeader: {
        width: 80,
        height: 80,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: 'white'
    },
    textCon: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10,
        paddingVertical: 5,
    },
    nameStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    goingOnStyle: {
        color: Colors.grey600,
        fontSize: 16,
    },
    contentCon: {
        padding: 20,
    },
    contentStyle: {
        color: Colors.blueGrey500
    },
    btnStyle: {
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    rowFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})