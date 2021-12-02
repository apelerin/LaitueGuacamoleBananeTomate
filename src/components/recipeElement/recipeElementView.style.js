import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    textContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        margin: 10,
    },

    titleText: {
        fontSize: 25,
        color: '#000000',
    },

    itemStyle: {
        marginVertical: 10,
        backgroundColor: '#EFEFEF',
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#303030',
        width: 390,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    
    foodPictureStyle: {
        borderRadius: 13,
        width: 100,
        height: 100,
    },
})

export default style
