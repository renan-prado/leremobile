import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { Component } from "react";
import Style from "./style";

export default class Navigation extends Component {

    constructor(props){
        super(props);
        
        this.routes = this.props.routes.routes;
        this.routeIndex = this.props.routes.index;

        this.renderItem = this.renderItem.bind(this);
    }


    renderItem({ item, index }){
        return (
            <TouchableOpacity onPress={ () => this.props.goto(item.routeName) } >
                <Text style={{ padding: 10 }} > { item.routeName } </Text>
            </TouchableOpacity>
        )
    }

    render(){
        
        return(
            <View style={Style.navigation}>

                <FlatList 
                    data={this.routes}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.key}
                    style={{ paddingTop: 20 }}
                />

            </View>
        )
    }
}
