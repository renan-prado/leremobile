import { ImageBackground, View } from 'react-native';
import React, { Component } from "react";
import Style from "./style";

import { Subtitle } from "../../Styles/Patterns";
import backgroundHeader from "../../../assets/images/background-home.jpg";

export default class Header extends Component {

    render(){
        return(
            <View style={Style.header}>
                <ImageBackground
                    source={backgroundHeader}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={Style.headerContainer}>

                        <View style={Style.headerPhoto}>
                            <View style={Style.headerPhotoImage}>

                            </View>
                        </View>

                        <View style={Style.headerName}>
                            <Subtitle
                                textColor="#ffffff"
                                style={{ marginLeft: 20 }}
                            >
                                Mauro Correa
                            </Subtitle>
                        </View>

                    </View>
                </ImageBackground>
            </View>

        )
    }
}
