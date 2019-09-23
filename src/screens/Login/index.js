import React, { Component } from 'react'
import { 
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity

} from "react-native";

import backgroundHeader from "../../../assets/images/background-grey.jpg";
import imageLogo from "../../../assets/images/logo_circle.png";
import imageEmail from "../../../assets/images/email.png";
import imagePassword from "../../../assets/images/password.png";

import Style from "./style";
import { ButtonLere, TextBase } from "../../Styles/Patterns";
import { DismissKeyboard } from "../../Styles/Patterns";


class Login extends Component {

    constructor(props){
        super(props)
    }   

    render(){
        return (
            <DismissKeyboard>
                <View style={Style.container}>
                    
                    {/* Header */}
                    <View style={Style.header}>
                        <ImageBackground
                            source={backgroundHeader}
                            style={{ width: '100%', height: '100%' }} >

                            <View style={Style.containerOpacity}>

                                <View style={Style.headerLogo}>
                                    <Image
                                        source={imageLogo}
                                        style={Style.headerLogoImage}
                                    />
                                </View>
                                <View style={Style.headerTitle}>
                                    <Text style={Style.headerTitleText}> Entrar </Text>
                                </View>

                            </View>

                        </ImageBackground>
                    </View>

                    <View style={Style.content}>
                        
                        <View>
                            <TextInput style={Style.contentInput} placeholder="Email" textContentType='emailAddress' />
                            <Image style={Style.contentInputIcon} source={imageEmail} />
                        </View>
     
                        <View>
                            <TextInput style={Style.contentInput} placeholder="Senha" textContentType='password' secureTextEntry={true} />
                            <Image style={Style.contentInputIcon} source={imagePassword} />
                        </View>

                        <ButtonLere style={Style.buttonLogin} title="Entrar" />

                    </View>

                    <View style={Style.createButton}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <TextBase style={Style.createButtonText}>Criar uma conta</TextBase>
                        </TouchableOpacity>
                    </View>
               

                </View>
            </DismissKeyboard>
        )
    }
}

export default Login