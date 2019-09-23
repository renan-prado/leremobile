import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image

} from "react-native";

import backgroundHeader from "../../../assets/images/background-grey.jpg";
import imageMan from "../../../assets/images/man.png";
import imageBack from "../../../assets/images/arrow-back.png";

import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";
import PersonTalk from "./PersonTalk";
import UserTalk from "./UserTalk.js";

class Login extends Component {

    constructor(props){
        super(props)
    }   

    render(){
        return (
            <DismissKeyboard>
                <View style={Style.container}>

                    <View style={Style.header}>
                        
                        <ImageBackground
                            source={backgroundHeader}
                            style={{ width: '100%', height: '100%' }} >

                                <View style={Style.containerOpacity}>

                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={0.5}>
                                        <View style={Style.containerHeader}>
                                            <Image source={imageBack} style={Style.containerHeaderImage} />    
                                            <Text style={Style.containerHeaderText}> Voltar </Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                        </ImageBackground>

                    </View>

                    <View style={Style.talkArea}>

                        <PersonTalk />
                        <UserTalk />
                        <PersonTalk />
                        <PersonTalk />
                        <UserTalk />

                    </View>

                    <View style={{ width: '100%', height: 100 }}>

                    </View>

                </View>
            </DismissKeyboard>
        )
    }
}

export default Login