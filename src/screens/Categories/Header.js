import { ImageBackground, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { Component } from "react";
import Style from "./style";

import menuImage from "../../../assets/images/menu.png";


export default class Header extends Component {

    render(){
        return(
            <View style={[Style.header]} >
                <ImageBackground source={this.props.imageBackground} style={{width: '100%', height: '100%'}}>
                    <View style={[Style.headerBlockTransparent, {paddingTop: this.props.statusBarHeight, backgroundColor: this.props.backgroundColor}]}>

                        <View style={Style.headerArea}>
                            
                            <View style={ Style.headerItems }>

                                <TouchableOpacity
                                    style={ Style.headerMenu }
                                    onPress={ () => this.props.toggleDrawer() }>
                                    
                                    <Image
                                        source={menuImage}
                                        style={ Style.headerMenuIcon }/>

                                </TouchableOpacity>

                                
                                <TextInput
                                    placeholder="Buscar"
                                    style={ Style.headerSearch }
                                />

                            </View>

                            <Text style={Style.headerTitle} >{ this.props.title }</Text>
    
                        </View>

                    </View>
                </ImageBackground>
            </View>

        )
    }
}
