import { Text, Modal, View, TouchableHighlight } from 'react-native';
import React, { Component } from "react";

import PresetStyles from "../../styles/Presets";


export default class TextHighLight extends Component {

    render(){
        return(
            <View>
                <Text style={PresetStyles.textStyles.textHighLight}> { this.props.children } </Text>
            </View>
        )
    }
}