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


class UserTalk extends Component {

    constructor(props){
        super(props)
    }   

    render(){
        return (
            <View style={Style.userTalk}>
                <View style={Style.userTextContainer}>
                    <Text style={Style.userText}>Renan Prado Renan Prado Renan Prado Renan Prado Renan Prado</Text>
                </View>
            </View>
        )
    }
}

export default UserTalk