import React, { Component } from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    ScrollView,

} from "react-native";

import backgroundHeader from "../../../assets/images/background-grey.jpg";
import imageMan from "../../../assets/images/man.png";
import imageBack from "../../../assets/images/arrow-back.png";

import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";
import PersonTalk from "./PersonTalk";
import UserTalk from "./UserTalk.js";
import { ButtonLere } from "../../Styles/Patterns";
import Colors from '../../Styles/Colors';

class SignUp extends Component {

    constructor(props){
        super(props)

        this.messages = [
            {
                type: 'person',
                msg: 'Olá! O meu nome é Machado'
            },
            {
                type: 'person',
                msg: 'Eu estarei fazendo o seu cadastro por aqui'
            },
            {
                type: 'person',
                msg: 'Primeiramente, qual é o seu nome completo?'
            },
        ];

        this.state = {
            placeholderBottom: 'Digite o seu nome completo...'
        };

        this.addMessage = this.addMessage.bind(this);

    }

    componentDidMount() {
        setTimeout(() => {
            this.scrollView.scrollToEnd();
        });
    }

    addMessage(type, msg, placeholder){

        this.messages.push({ type, msg });
        this.state.placeholderBottom = placeholder
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

                        <ScrollView
                            ref={(ref) => { this.scrollView = ref }}
                            contentContainerStyle={Style.talkAreaScroll}
                        >

                            { this.messages.map(( item, index ) => item.type == 'person' ?  <PersonTalk key={index} msg={item.msg} /> : <UserTalk key={index} msg={item.msg} />) }

                        </ScrollView>

                    </View>

                    <View style={Style.bottom}>
                        <TextInput maxLength={50} textContentType="name" autoCapitalize="words" autoFocus={true} style={Style.userInput} placeholder={this.state.placeholderBottom} />
                        <ButtonLere style={Style.bottomButton} activeOpacity={0.8} textStyle={{ color: Colors.PRIMARY, fontWeight: 'bold' }} title="Enviar" />
                    </View>

                </View>
            </DismissKeyboard>
        )
    }
}

export default SignUp