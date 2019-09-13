import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";

import Colors from "../styles/Colors";

import { LerelContent } from "../methods/readArea/readAreaMethods";

class Read extends Component {

    state = {

    }

    render(){
        return (
            <View style={styles.container}>

                <LerelContent>
                    {`O meu gato ##(personagem{Fernando}) é lindo e o meu outro gato ##(personagem{Jonas}) também é, mas o ##(personagem{Jonas}) é meio estranho.Eu cuido deles todos os dias, sem preconceito, pois sao apenas animais`}
                </LerelContent>

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
        backgroundColor:Colors.WHITE,
        paddingHorizontal: 20
    },
})

export default Read