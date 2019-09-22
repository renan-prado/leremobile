import { View, StyleSheet } from 'react-native';
import React, { Component } from "react";
import Colors from "../Styles/Colors";

export default class ProgressBar extends Component {

    render(){
        return(
            <View style={Style.container}>
                <View style={[Style.statusBar, { width: this.props.progress + '%' }]}></View>
            </View>
        )
    }
}



const Style = StyleSheet.create({

    container: {
        width: '90%',
        height: 4,
        backgroundColor: '#eee',
        borderRadius: 3,
        marginBottom: 10
    },

    statusBar: {
        height: '100%',
        backgroundColor: Colors.PRIMARY + 'bb',
        borderRadius: 3,
    },
})