import { StyleSheet, Dimensions } from 'react-native';

const mainWidth = Dimensions.get('window').width * 0.85;
var mainInt = parseInt(mainWidth, 10);

export default StyleSheet.create({
    MainButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        width: mainInt,
        height: 80,

    },
    MainButtonText: {},
    MainButtonIndicator: {},
})