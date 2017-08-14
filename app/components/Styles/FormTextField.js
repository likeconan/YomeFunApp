import { StyleSheet } from 'react-native'

export default Styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 75
    },
    textCon: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal:5,
        alignItems:'center',
        flexDirection:'row'
    },
    textInput: {
        marginLeft: 10,
        height: 42,
        width:'80%'
    },
    errorText: {
        color: '#D50000',
        marginTop: 5
    }
})