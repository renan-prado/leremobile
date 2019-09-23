import React, { Component } from 'react'
import { 
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity

} from "react-native";

import backgroundHeader from "../../../assets/images/background-grey.jpg";
import imagePerfil from "../../../assets/images/fulano.jpg";
import imageBack from "../../../assets/images/arrow-back.png";

import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";

import Colors from "../../Styles/Colors";

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
                                    <Image
                                        source={imageBack}
                                        style={{ width: 20, height: 20, marginTop: StatusBar.currentHeight + 20, marginLeft: 20 }}
                                    />
                                </TouchableOpacity>

                                <View style={Style.headerLogo}>

                                    <View style={Style.headerLogoContainer}>
                                        <Image
                                            source={imagePerfil}
                                            style={Style.headerLogoImage}
                                        />
                                    </View>

                                </View>

                                <View style={Style.headerTitle}>

                                    <View style={Style.headerInfo}>

                                        <Text style={Style.headerInfoName}> Mauro Correa </Text>

                                        <View style={Style.headerInfoStats}>
                                            
                                            <View style={Style.headerInfoStatsItem}>
                                                <Text style={[Style.headerInfoStatsNumber, {color: Colors.GREEN_DARK}]}>20</Text>
                                                <Text style={[Style.headerInfoStatsLabel, {color: Colors.GREEN_DARK}]}>Leituras</Text>
                                            </View>
                                            <View style={Style.headerInfoStatsItem}>
                                                <Text style={[Style.headerInfoStatsNumber, {color: Colors.SECUNDARY}]}>3</Text>
                                                <Text style={[Style.headerInfoStatsLabel, {color: Colors.SECUNDARY}]}>Lendo</Text>
                                            </View>
                                            <View style={Style.headerInfoStatsItem}>
                                                <Text style={[Style.headerInfoStatsNumber, {color: Colors.GREY}]}>11</Text>
                                                <Text style={[Style.headerInfoStatsLabel, {color: Colors.GREY}]}>Na Lista</Text>
                                            </View>

                                        </View>

                                    </View>

                                </View>

                            </View>

                        </ImageBackground>
                    </View>


                    <View style={Style.perfilContent}>

                        <Text style={[Style.textItem, { color: Colors.GREY, marginBottom: 40 }]}> mauro.correa@gmail.com </Text>
              
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={[Style.textItem, { color: Colors.SECUNDARY }]}> Alterar dados </Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={[Style.textItem, { color: Colors.SECUNDARY }]}> Excluir conta </Text>
                        </TouchableOpacity>
                        
                    </View>


                    <View style={Style.bottom}>
                        
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={[Style.textItem, { color: Colors.SECUNDARY, textAlign: 'center' }]}>Sair</Text>
                        </TouchableOpacity>

                    </View>
                    

                </View>
            </DismissKeyboard>
        )
    }
}

export default Login