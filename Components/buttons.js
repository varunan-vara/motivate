import React, { Component } from 'react';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/dev';
import styles from './styles.js';
import { View, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

let [fontsLoaded] = useFonts({
    OpenSans_400Regular
});

const MainButtunContent = (!fontsLoaded) ? 
<ActivityIndicator style={styles.MainButtonIndicator}/> : 
<Text style={styles.MainButtonText}>{this.props.title}</Text>;

class MyButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.MainButton}>
                    <LinearGradient colors={["#0077B6","#00B4D8"]}>{MainButtunContent}</LinearGradient>
                </View>
            </TouchableOpacity>
        );
    }
}

class TabButton extends Componenet {
    render() {
        return(
            <TouchableOpacity></TouchableOpacity>
        );
    };
}

class RoundedCornerButton extends Component {
    render() {
        return(
            <TouchableOpacity></TouchableOpacity>
        );
    };
}

class ClearCornerButton extends Component {
    render() {
        return(
            <TouchableOpacity></TouchableOpacity>
        );
    };
}

export {
    MyButton,
    TabButton,
    RoundedCornerButton,
    ClearCornerButton
};