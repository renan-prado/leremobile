import React, { Component } from 'react'
import { 
    View,
    Text,
    StatusBar,

} from "react-native";

import backgroundHeader from "../../../assets/images/background-grey.jpg";
import Style from "./style";
import { DismissKeyboard } from "../../Styles/Patterns";
import Colors from "../../Styles/Colors";

import Header from "./Header";
import CategoryContent from "./CategoryContent";

class Categories extends Component {


    constructor(props){
        super(props)

        this.toggleDrawer = this.toggleDrawer.bind(this)    
    }   

    toggleDrawer(){
        this.props.navigation.toggleDrawer();
    }

    render(){
        return (
            <DismissKeyboard>
                <View style={Style.container}>

                    <Header
                        imageBackground={backgroundHeader}
                        statusBarHeight={StatusBar.currentHeight}
                        toggleDrawer={this.toggleDrawer}
                        backgroundColor={Colors.PRIMARY + 'e5'}
                        title="Comédia"
                    />

                    <CategoryContent />

                </View>
            </DismissKeyboard>
            
        )
    }
}

export default Categories