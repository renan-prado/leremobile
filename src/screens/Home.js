import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";

import Header from "../Components/home/Header";
import Feed from "../Components/home/Feed";
import Colors from "../Styles/Colors";

class Read extends Component {

    state = {
    }

    render(){
        return (
            <View style={styles.container}>
                <Header />
                <Feed />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        flexDirection: 'column',
        backgroundColor: Colors.WHITE_RED
    },
})

export default Read