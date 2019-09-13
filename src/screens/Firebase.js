import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from "react";

import Firebase from '../database/Firebase'

export default class FirebaseApp extends Component {

    state = {
        name: 'Fulano'
    }

    componentDidMount(){

        Firebase.get('/users/002', data => this.setState({ name: data.name }))

        Firebase.save('/users/002', {
            name: 'Jonas',
            age: 20
        })
    }

    render(){

        return(
            <View style={styles.container}>
                <Text> Firebase: { this.state.name } </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
});