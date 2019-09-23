import React, { Component } from 'react'
import { 
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image

} from "react-native";

import imageMan from "../../../assets/images/man.png";

import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";


class PersonTalk extends Component {

    constructor(props){
        super(props)
    }   

    render(){
        return (
            <View style={Style.personTalk}>

                <View style={Style.personIcon}>
                    <ImageBackground style={{ width: '100%', height: '100%' }} source={imageMan} />
                </View>

                <View style={Style.personTextContainer}>
                    <Text style={Style.personText}>Qual é o seu nome? Lorem Ipsum teste teste </Text>
                </View>

            </View>
        )
    }
}

export default PersonTalk