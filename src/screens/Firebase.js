import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from "./node_modules/react";

import Firebase from '../Database/Firebase'

export default class FirebaseApp extends Component {

    state = {
        name: 'Fulano'
    }

    componentDidMount(){

        // Firebase.get('/users/002', data => this.setState({ name: data.name }))

        // Firebase.createUser('renanprado96@gmail.com', 'egtsejbegtsejb', err => {})
        Firebase.login('renanprado96@gmail.com', 'egtsejbegtsejb', err => {})
        
        // Firebase.save('/users/003', {
        //     name: 'Jonas',
        //     age: 20
        // })


        Firebase.get('/books/', data => this.setState({ name: data.name }))

        Firebase.userLogged( books => {
            if(books){
                this.setState({ name: books.name })
            }
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