import { StyleSheet, Dimensions } from 'react-native'

export default Styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    rootCon: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageStyle: {
        marginHorizontal: 5,
        marginVertical: 5,
        width: Dimensions.get('window').width / 4 - 20,
        height: Dimensions.get('window').width / 4 - 20,
        flex: 1,
        alignItems: 'flex-end',
    },
    closeCon: {
        width: 24,
        height: 24,
        margin:-8
    }

})