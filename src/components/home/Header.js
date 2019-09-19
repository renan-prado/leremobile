import { TextInput, Image, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from "react";

import Colors from "../../Styles/Colors";
import logoImage from "../../../assets/images/logo.png";



export default class Header extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageLogo}>
                    <Image source={logoImage} style={{width: 40, height: 40}} />
                </View>

                <View style={styles.inputSearch}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Buscar"
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    imageLogo: {
        width: 80,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputSearch: {
        flex: 1,
        height: 35,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 10,
        marginHorizontal: 40,
    },
    textInput: {
        paddingVertical: 0,
        paddingHorizontal: 5
    }
});