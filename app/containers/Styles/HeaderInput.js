import { StyleSheet, Dimensions } from 'react-native'


export default Styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
    },
    formView: {
        width: Dimensions.get('window').width - 200,
    },
    btnView: {
        width: 48,
        paddingTop: 4,
        marginRight: 20,
    },
})