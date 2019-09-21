import React, { Component } from 'react'
import { 
    View,
    Text,
    StatusBar,

} from "react-native";

import backgroundHeader from "../../../assets/images/background-home.jpg";
import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";


import Header from "./Header";
import HomeContent from "./HomeContent";

class Home extends Component {


    constructor(props){
        super(props)

        this.toggleDrawer = this.toggleDrawer.bind(this)    
    }   

    toggleDrawer(){
        this.props.navigation.toggleDrawer();
    }

    state = {
    }

    render(){
        return (
            <DismissKeyboard>
                <View style={Style.container}>

                    <Header
                        imageBackground={backgroundHeader}
                        statusBarHeight={StatusBar.currentHeight}
                        toggleDrawer={this.toggleDrawer}
                        />

                    <HomeContent />

                </View>
            </DismissKeyboard>
            
        )
    }
}

export default Home