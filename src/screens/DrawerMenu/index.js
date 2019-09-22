import React, { Component } from 'react'
import { 
    View,
    Text,
    ImageBackground,
    Button,

} from "react-native";

import Style from "./style";
import Header from "./Header";
import Navigation from "./Navigation";

class DrawerMenu extends Component {

    constructor(props){
        super(props)

        this.goto = this.goto.bind(this);
    }

    goto(page){
        this.props.navigation.navigate(page)
    }

    render(){
        return (
            
            <View style={Style.container}>

               <Header />
               <Navigation goto={this.goto} routes={this.props.navigation.state} />
               
            </View>            
        )
    }
}

export default DrawerMenu