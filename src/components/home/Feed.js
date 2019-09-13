import { FlatList, ImageBackground, View, StyleSheet, Text, Dimensions } from 'react-native';
import React, { Component } from "react";

import Colors from "../../styles/Colors";
import narniaImage from "../../../assets/images/narnia.png";

export default class Feed extends Component {

    render(){

        const data = [
            {
                image: narniaImage,
                text: 'Narnia: O retorno do principe que morreu e voltou e tals',
            },
            {
                image: narniaImage,
                text: 'Narnia Continuação',
            },
            {
                image: narniaImage,
                text: 'Narnia Continuação',
            },
            {
                image: narniaImage,
                text: 'Narnia Continuação',
            },
            {
                image: narniaImage,
                text: 'Narnia Continuação',
            },
            {
                image: narniaImage,
                text: 'Narnia Continuação',
            }
        ]

        return(
            <View style={styles.container}>

                <FlatList
                    contentContainerStyle={{ paddingBottom: 100}}
                    style={{ width: '100%' }}
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={ ({item}) => {
                        return (
                            <View style={styles.feedItemBook} >
                                <ImageBackground source={item.image} style={styles.feedItemBackground}>
                                    <Text style={styles.feedItemText}> {item.text} </Text>
                                </ImageBackground>
                            </View>
                        )
                    }}
                />


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: Dimensions.get('window').width
    },

    feedItemBook: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        paddingTop: 20
    },
    feedItemBackground: {
        width: 250,
        height: '100%',
        justifyContent: 'flex-end',
    },

    feedItemText: {
        padding: 10,
        backgroundColor: Colors.OPACITY_BLACK,
        color: Colors.TEXT_WHITE,
        fontSize: 17,
        textAlign: 'center'
    }

});