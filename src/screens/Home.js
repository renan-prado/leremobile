import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";

class Read extends Component {

    state = {
    }

    render(){
        return (
            <View style={styles.container}>
                <Text> Home </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
})

export default Read