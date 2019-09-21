import React, { Component } from 'react'
import { 
    View,
    Text,
} from "react-native";

import backgroundHeader from "../../../assets/images/background-home.jpg";
import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";


import Header from "./Header";
import HomeContent from "./HomeContent";

class Home extends Component {

    state = {
    }

    render(){
        return (
            <DismissKeyboard>
                <View style={Style.container}>

                    <Header
                        imageBackground={backgroundHeader}
                        statusBarHeight={this.props.statusBarHeight} />

                    <HomeContent />

                </View>
            </DismissKeyboard>
            
        )
    }
}

export default Home